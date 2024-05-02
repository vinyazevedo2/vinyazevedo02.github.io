$(document).ready(function(){

    $('body').on('click', '#consultar', function(){
        consultaCep();
    });
    function consultaCep(){
        const cep = $('#cep').val();

        if(cep.length !== 8){
            $('body').find("#resultados").html('<div class="msg-resultado">Digite o cep corretamente</div>');
            return false;
        }

        loading();
        setTimeout(function(){

        $.ajax({
            url: 'https://viacep.com.br/ws/'+cep+'/json/', 
            type: 'GET',
            dataType: 'json',
            success: function(data){
                console.log(data);
                $('body').find('#resultados').html('<h2>Resultado da consulta</h2>'
                                                  + '<p>CEP: '+data.cep+'</p'
                                                  + '<p>Logradouro: '+data.logradouro+'</p'
                                                  + '<p>Bairro: '+data.bairro+'</p'
                                                  + '<p>Cidade: '+data.cidade+'</p'
                                                  + '<p>Estado: '+data.uf+'</p'
                                                  + '<p>IBGE: ' +data.ibge+'</p'                                              
                                                  
                                                   );
            }
        })
    },1000 );
    }
    function loading(){
        $('#resultados').html('<img src="carregando.gif"/>');
    }
    $('body').on('click', '#modo-noturno', function(){
        $('body').toggleClass('dark-mode')
        $(this).toggleClass('apagada');

    if(Cookies.get('modo-noturno' == 'on')){
       Cookies.set('modo-noturno', 'off');          
    }else{
       Cookies.set('modo-noturno', 'on');
     }

});

$('body').on('input', '#cep', function(){
    $(this).val($(this).val().replace(/\D/g,'')); //nesta linha, o campo irá aceitar somente os numeros
})

if(Cookies.get('modo-noturno' == 'on')){
    $('body').toggleClass('dark-mode');
    $('body').find('container').toggleClass('dark-mode'); 
    $('body').find('lampada').toggleClass('apagada'); 

    }
})