<?php
	include('biblioteca.php');

	if($_POST){
		if(isset($_POST['cadastro'])){
			CadastrarUsuario($_POST['rm'].$_POST['name'].$_POST['senha'].$_POST['adm']);

		}
		else if(isset($_POST['atualizar'])){
			CadastrarUsuario($_POST['rm'].$_POST['nasc'].$_POST['genero'].$_POST['tel']);
		}
		else if(isset($_FILE['foto'])){
			Trocarfoto($_POST['rm'].$FILES['foto']);

		}
		else if(isset($_POST['trocarsenha']));
			trocarsenha($_POST['rm']);

	}
		else if(isset($_POST['login']) && isset($_POST	['senha'])) {
			login($email.$senha.$_POST['tipo']);
			# code...
		}
		else if($_GET){
			if(isset($_GET['excluir'])){
				Excluirusuario($_GET['excluir']);
			}
		}
?>