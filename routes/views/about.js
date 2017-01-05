var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	locals.section = 'about';
	locals.page.title = 'Acerca Grupo Naval';
	
	locals.organisers = [
		{ name: 'Miembro uno', image: '/images/organiser-craig_sharkie.jpg', twitter: 'twalve',       title: 'Founder, MC, coordinator' },
		{ name: 'Miembro dos',     image: '/images/organiser-gil_davidson.jpg',     twitter: 'iamnotyourbroom',   title: 'Atlassian coordinator' },
		{ name: 'Miembro tres',    image: '/images/organiser-adam_ahmed.jpg',    twitter: 'hitsthings',   title: 'Atlassian coordinator' },
		{ name: 'Alex Quintanilla', image: '/images/team/alex_qp.jpg', twitter: '', title: 'Estudiante de ingenieria' }
	]
	
	view.render('site/about');
	
}
