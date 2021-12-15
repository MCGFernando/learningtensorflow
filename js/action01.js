$('#result').text('');

function executar() {
	let txt = ''
	
	const escalar = tf.scalar(1.5) //Controi uma variavel Escalar (Numero)
	const tensor1d = tf.tensor1d([1, 2, 3]) //Controi um Array
	const tensor2d = tf.tensor2d([1, 2, 3, 4], [2, 2]) //Controi uma Matriz 2d. Onde o 1 parametro representa os elementos da Matriz e o 2 parametro as dimensoes da Matriz
	const tensor2dV2 = tf.tensor2d([[1, 2], [3, 4]]) //Controi uma Matriz 2d. 
	const tensor3d = tf.tensor3d([
		[
			[1],[2]],[[3],[4]
		]
	])

	txt += 'Tensor Escalar: \n' + escalar.toString() + '\n\n'
	txt += 'Tensor de 1 Dimensao: \n' + tensor1d.toString() + '\n\n'
	txt += 'Tensor de 2 Dimensoes: \n' + tensor2d.toString() + '\n\n'
	txt += 'Tensor de 2 Dimensoes: \n' + tensor2dV2.toString() + '\n\n'
	txt += 'Tensor de 3 Dimensoes: \n' + tensor3d.toString() + '\n\n'




	/* let txt = '';

	const escalar = tf.scalar(1.5);

	const tensor1d = tf.tensor1d([1, 2, 3]);

	const tensor2d = tf.tensor2d([[1, 2], [3, 4]]);
	//const tensor2d = tf.tensor2d([1, 2, 3, 4], [2, 2]);

	const tensor3d = tf.tensor3d([[[1], [2]], [[3], [4]]]);
	//const tensor3d = tf.tensor3d([1, 2, 3, 4], [2, 2, 1]);

	const tensor4d = tf.tensor4d([[[[1], [2]], [[3], [4]]]]);
	//const tensor4d = tf.tensor4d([1, 2, 3, 4], [1, 2, 2, 1]);

	const tensor5d = tf.tensor5d([[[[[1], [2]], [[3], [4]]]]]);
	//const tensor5d = tf.tensor5d([1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 2, 2, 1]);

	const tensor6d = tf.tensor6d([[[[[[1], [2]], [[3], [4]]], [[[5], [6]], [[7], [8]]]]]]);
	//const tensor6d = tf.tensor6d([1, 2, 3, 4, 5, 6, 7, 8], [1, 1, 2, 2, 2, 1]);

	txt += 'Tensor Escalar: \n' + escalar.toString() + '\n\n';
	txt += 'Tensor de 1 Dimensão: \n' + tensor1d.toString() + '\n\n';
	txt += 'Tensor de 2 Dimensões: \n' + tensor2d.toString() + '\n\n';
	txt += 'Tensor de 3 Dimensões: \n' + tensor3d.toString() + '\n\n';
	txt += 'Tensor de 4 Dimensões: \n' + tensor4d.toString() + '\n\n';
	txt += 'Tensor de 5 Dimensões: \n' + tensor5d.toString() + '\n\n';
	txt += 'Tensor de 6 Dimensões: \n' + tensor6d.toString() + '\n\n'; */

	exibir(txt);
}

function exibir(str='') {
	$('#result').text(str);
}
