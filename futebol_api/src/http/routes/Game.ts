import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const Prisma = new PrismaClient();
const app = express();

app.use(express.json());

// Rota para adicionar um novo jogo
app.post('/game', async (req: Request, res: Response) => {
  try {
    const newGame = await prisma.game.create({
      data: req.body,
    });
    res.json(newGame);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar jogo' });
  }
});

// Rota para mostrar a tabela de jogos (somente para campeonatos)
app.get('/table', async (req: Request, res: Response) => {
  try {
    const championshipGames = await prisma.game.findMany({
      where: { type: 'Campeonato' },
    });
    res.json(championshipGames);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter tabela de jogos' });
  }
});

// Rota para mostrar o placar de um jogo específico
app.get('/game/:id/score', async (req: Request, res: Response) => {
  try {
    const gameId = parseInt(req.params.id);
    const game = await prisma.game.findUnique({
      where: { id: gameId },
    });
    if (!game) {
      return res.status(404).json({ message: 'Jogo não encontrado' });
    }
    res.json({ homeTeamGoals: game.homeTeamGoals, awayTeamGoals: game.awayTeamGoals });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter placar do jogo' });
  }
});

// Rota para mostrar os titulares e reservas de um jogo específico
app.get('/game/:id/players', async (req: Request, res: Response) => {
  try {
    const gameId = parseInt(req.params.id);
    const players = await prisma.player.findMany({
      where: { gameId },
    });
    res.json(players);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter jogadores do jogo' });
  }
});

// Rota para mostrar cartões de um jogador específico em um jogo específico
app.get('/game/:gameId/player/:playerId/cards', async (req: Request, res: Response) => {
  try {
    const gameId = parseInt(req.params.gameId);
    const playerId = parseInt(req.params.playerId);
    const player = await prisma.player.findUnique({
      where: { id: playerId },
    });
    if (!player || player.gameId !== gameId) {
      return res.status(404).json({ message: 'Jogador não encontrado neste jogo' });
    }
    res.json({ yellowCards: player.yellowCards, redCards: player.redCards });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter cartões do jogador' });
  }
});

// Rota para adicionar cartão a um jogador em um jogo específico
app.post('/game/:gameId/player/:playerId/card', async (req: Request, res: Response) => {
  try {
    const gameId = parseInt(req.params.gameId);
    const playerId = parseInt(req.params.playerId);
    const player = await prisma.player.findUnique({
      where: { id: playerId },
    });
    if (!player || player.gameId !== gameId) {
      return res.status(404).json({ message: 'Jogador não encontrado neste jogo' });
    }
    if (req.body.card === 'yellow') {
      await prisma.player.update({
        where: { id: playerId },
        data: { yellowCards: player.yellowCards + 1 },
      });
      if ((player.yellowCards + 1) % 2 === 0) {
        // Implemente aqui a lógica para suspender o jogador por uma partida
      }
    } else if (req.body.card === 'red') {
      await prisma.player.update({
        where: { id: playerId },
        data: { redCards: player.redCards + 1 },
      });
      // Implemente aqui a lógica para suspender o jogador por uma partida
    } else {
      return res.status(400).json({ message: 'Tipo de cartão inválido' });
    }
    res.json({ message: 'Cartão adicionado com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar cartão ao jogador' });
  }
});

// Rota para adicionar tempo de acréscimo a um jogo específico

// Rota para adicionar jogador a um jogo específico
app.post('/game/:id/player', async (req: Request, res: Response) => {
  try {
    const gameId = parseInt(req.params.id);
    const newPlayer = await prisma.player.create({
      data: { ...req.body, gameId },
    });
    res.json(newPlayer);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar jogador ao jogo' });

  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
