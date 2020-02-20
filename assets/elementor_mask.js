jQuery( document ).ready( function( $ ) {
	$('.ev-tel').mask('0000-0000');
	$('.ev-tel-ddd').mask('(00) 0000-0000');
	$('.ev-tel-us').mask('(000) 000-0000');
	$('.ev-cpf').mask('000.000.000-00', {reverse: true});
	$('.ev-cnpj').mask('00.000.000/0000-00', {reverse: true});
	$('.ev-money').mask('000.000.000.000.000,00', {reverse: true});
	$('.ev-cep').mask('00000-000');
	$('.ev-time').mask('00:00:00');
	$('.ev-date').mask('00/00/0000');
	$('.ev-date_time').mask('00/00/0000 00:00:00');
});
