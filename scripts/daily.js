perfilSchema = require(`../scripts/perfil`);

async function addUserXp() {
	const result = await perfilSchema.findOne({userId: "656295512219058196"})
};

/*function openAboutPage() {
	window.open('html/about.html', '_blank');
}*/