$('.openDesc').each(function(){

	var estado = $(this);

	$(estado).click(function(){
		console.log('CLICOU');
		$('.openDesc').children('path').attr('class', 'estado');
		$('.state').html($(estado).children('desc').text());
		$(estado).children('path').attr('class', 'estado ativo');


		console.log($(estado).children('path').attr('id'));

		if($(estado).children('path').attr('id') == 'estado_sp'){
			$('.gloria').html('<ul><li>São Paulo</li><li>Guarulhos</li><li>Campinas</li><li>São Bernardo do Campo</li><li>São José dos Campos</li><li>Santo André</li><li>Ribeirão Preto</li><li>Osasco</li><li>Sorocaba</li><li>Mauá</li><li>São José do Rio Preto</li></ul>');
			$('.respeita').html('<ul><li>Mogi das Cruzes</li><li>Santos</li><li>Diadema</li><li>Jundiaí</li><li>Piracicaba</li><li>Carapicuíba</li><li>Bauru</li><li>Praia Grande</li><li>Guarujá</li><li>Barueri</li><li></li></ul>');

		}
		else if($(estado).children('path').attr('id') == 'estado_rj')
			$('.gloria').html('<ul><li>Rio de janeiro</li><li>São Gonçalo</li><li>Duque de Caxias</li><li>Nova Iguaçu</li><li>Niterói</li></ul>');
		$('.respeita').html('<ul><li>Belford Roxo</li><li>Campos dos Goytacazes</li><li>São João de Meriti</li><li>Petrópolis</li><li>Volta Redonda</li></ul>');


		else if($(estado).children('path').attr('id') == 'estado_ac')
			$('.gloria').html('<ul><li>Rio Branco</li></ul>');


		else if($(estado).children('path').attr('id') == 'estado_ap')
			$('.gloria').html('<ul><li>Macapá</li></ul>');
		

		else if($(estado).children('path').attr('id') == 'estado_am')
			$('.gloria').html('<ul><li>Manaus</li></ul>');

		
		else if($(estado).children('path').attr('id') == 'estado_ba')
			$('.gloria').html('<ul><li>Salvador</li><li>Feira de Santana</li><li>Vitória da Conquista</li></ul>');
		$('.respeita').html('<ul><li>Camaçari</li><li>Juazeiro</li></ul>');

		else if($(estado).children('path').attr('id') == 'estado_ce')
			$('.gloria').html('<ul><li>Fortaleza</li><li>Caucaia</li><li>Juazeiro do Norte</li></ul>');


		else if($(estado).children('path').attr('id') == 'estado_go')
			$('.gloria').html('<ul><li>Goiânia</li></ul>');
		$('.respeita').html('<ul><li>Aparecida de Goiânia</li></ul>');


		else if($(estado).children('path').attr('id') == 'estado_ma')
			$('.gloria').html('<ul><li>São Luís</li></ul>');
		$('.respeita').html('<ul><li>Imperatriz</li></ul>');

		else if($(estado).children('path').attr('id') == 'estado_mt')
			$('.gloria').html('<ul><li>Cuiabá</li></ul>');


		else if($(estado).children('path').attr('id') == 'estado_ms')
			$('.gloria').html('<ul><li>Campo Grande</li></ul>');
		$('.respeita').html('<ul><li>Dourados</li></ul>');


		else if($(estado).children('path').attr('id') == 'estado_mg')
			$('.gloria').html('<ul><li>Belo Horizonte</li><li>Uberlândia</li><li>Juiz de Fora</li></ul>');
		$('.respeita').html('<ul><li>Betim</li><li>Montes Claros</li><li>Ribeirão das Neves</li></ul>');


		else if($(estado).children('path').attr('id') == 'estado_pa')
			$('.gloria').html('<ul><li>Belém</li></ul>');
		

		else if($(estado).children('path').attr('id') == 'estado_pr')
			$('.gloria').html('<ul><li>Curitiba</li><li>Londrina</li><li>Maringá</li></ul>');
		$('.respeita').html('<ul><li>Ponta Grossa</li><li>Cascavel</li><li>São José dos Pinhais</li></ul>');


		else if($(estado).children('path').attr('id') == 'estado_pe')
			$('.gloria').html('<ul><li>Recife</li></ul>');
		$('.respeita').html('<ul><li>Jaboatão dos Guararapes</li></ul>');


		else if($(estado).children('path').attr('id') == 'estado_pi')
			$('.gloria').html('<ul><li>Teresina</li></ul>');
		

		else if($(estado).children('path').attr('id') == 'estado_pr')
			$('.gloria').html('<ul><li>Porto Alegre</li><li>Caxias do Sul</li><li>Novo Hamburgo</li><li>Santa Maria</li><li>Canoas</li></ul>');
		$('.respeita').html('<ul><li>Pelotas</li><li>Gravataí</li><li>Viamão</li><li>São Leopoldo</li><li>Rio Grande</li></ul>');


		else if($(estado).children('path').attr('id') == 'estado_ro')
			$('.gloria').html('<ul><li>Porto Velho</li></ul>');
		

		else if($(estado).children('path').attr('id') == 'estado_rr')
			$('.gloria').html('<ul><li>Boa Vista</li></ul>');
		

		else if($(estado).children('path').attr('id') == 'estado_sc')
			$('.gloria').html('<ul><li>Joinville</li><li>Florianópolis</li><li>Blumenau</li><li>Chapecó</li><li>Itajaí</li></ul>');
		$('.respeita').html('<ul><li>Criciúma</li><li>Jaraguá do Sul</li><li>Palhoça</li><li>Lages</li><li>Balneário Camboriú</li><li>Brusque</li></ul>');


		else if($(estado).children('path').attr('id') == 'estado_al')
			$('.gloria').html('<ul><li>Maceió</li></ul>');
		$('.respeita').html('<ul><li>Arapiraca</li></ul>');


		else if($(estado).children('path').attr('id') == 'estado_to')
			$('.gloria').html('<ul><li>Palmas</li></ul>');
		


		else if($(estado).children('path').attr('id') == 'estado_se')
			$('.gloria').html('<ul><li>Maceió</li></ul>');
		$('.respeita').html('<ul><li>Arapiraca</li></ul>');


		else if($(estado).children('path').attr('id') == 'estado_rn')
			$('.gloria').html('<ul><li>Natal</li></ul>');
		$('.respeita').html('<ul><li>Mossoró</li></ul>');


		else if($(estado).children('path').attr('id') == 'estado_es')
			$('.gloria').html('<ul><li>Serra</li><li>Vila Velha</li></ul>');
		$('.respeita').html('<ul><li>Cariacica</li><li>Vitória</li></ul>');


		else if($(estado).children('path').attr('id') == 'estado_pb')
			$('.gloria').html('<ul><li>João Pessoa</li></ul>');
		$('.respeita').html('<ul><li>Campina Grande</li></ul>');


		else if($(estado).children('path').attr('id') == 'estado_df')
			$('.gloria').html('<ul><li>Brasília</li></ul>');
		

		

		else{
			$('.gloria').html('').text();
			$('.respeita').html('').text();
		}
	});

});
