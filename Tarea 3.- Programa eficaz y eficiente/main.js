'use strict';

(function() {
	// Colocando el programa eficaz en la interfaz
	let programa_eficaz = document.getElementById('programa-eficaz');
	let salida_eficaz = `
		<ul>
			<li>• 10 x 1 = 10</li>
			<li>• 10 x 2 = 20</li>
			<li>• 10 x 3 = 30</li>
			<li>• 10 x 4 = 40</li>
			<li>• 10 x 5 = 50</li>
			<li>• 10 x 6 = 60</li>
			<li>• 10 x 7 = 70</li>
			<li>• 10 x 8 = 80</li>
			<li>• 10 x 9 = 90</li>
			<li>• 10 x 10 = 100</li>
		</ul>
	`;
	programa_eficaz.innerHTML = salida_eficaz;

	// Colocando el programa eficiente en la interfaz
	let programa_eficiente = document.getElementById('programa-eficiente');
	let input_eficiente = document.getElementById('input-table');
	input_eficiente.value = "";
	input_eficiente.focus();
	input_eficiente.addEventListener("change", (e) => {
		e.target.value > 0 ? tabla(e.target.value) : clean();
	});

	let tabla = tabla => {
	let salida_eficaz = `<ul>`;
		for (let x = 1; x <= tabla; x++) {
			salida_eficaz += `<li>• ${tabla} x ${x} = ${tabla * x}</li>`;
		}
		salida_eficaz += `</ul>`;
		programa_eficiente.innerHTML = salida_eficaz;
	}

	let clean = clean => {
		programa_eficiente.innerHTML = '';
	}
}()); 