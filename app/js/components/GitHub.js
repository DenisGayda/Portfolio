import React from 'react';
import GithubMenu from './GithubMenu';
import GithubSlide from './GithubSlide';

export default class extends React.Component {
    _setFunction() {
        var totWidth = 0;
        var positions = new Array();

        $('#slides .slide').each(function(i) {
            positions[i] = totWidth;
            totWidth += Math.ceil($(this).width());
        });

        $('#slides').width(totWidth);

        $('#menu ul li a').click(function(e){
            e.preventDefault();
            $('li.menuItem').removeClass('act').addClass('inact');
            $(this).parent().addClass('act')

            var pos = $(this).parent().prevAll('.menuItem').length;
            $('#slides').stop().animate({marginLeft: -positions[pos]+'px'},450);  
        });

        $('#menu ul li.menuItem:first').addClass('act').siblings().addClass('inact');
    }
    componentDidMount() {
        this._setFunction()
    }
	render() {
        let site = ['magazine', 'Translator', 'site1', 'site2', 'site4' ,'comments', 'site1', 'portfolio'];
		return (
			<main className="wrapper">
                <div id="gallery">
                    <GithubMenu site = {site} />
                    <div id="slides">
                        <GithubSlide site = {'magazine'} technology = {['Jade', 'CSS3 via Sass', 'Javascript', 'React', 'gulp']}/>
                        <GithubSlide site = {'Translator'} technology = {['HTML', 'CSS3 via Sass', 'jQuerry', 'AJAX']}/>
                        <GithubSlide site = {'site1'} technology = {['HTML', 'CSS3 via Sass']}/>
                        <GithubSlide site = {'site2'} technology = {['HTML', 'CSS3 via Sass', 'Javascript']}/>
                        <GithubSlide site = {'site4'} technology = {['HTML', 'CSS3 via Sass', 'jQuerry']}/>
                        <GithubSlide site = {'comments'} technology = {['HTML', 'CSS3 via Sass', 'React']}/>
                        <GithubSlide site = {'site1'} technology = {['HTML', 'CSS3 via Sass', 'Javascript', 'jQuerry', 'React']}/>
                        <GithubSlide site = {'portfolio'} technology = {['HTML', 'CSS3 via Sass', 'Javascript', 'jQuerry', 'React', 'gulp']}/>
                    </div>
                </div>
                {this._setFunction()}
            </main>
		);
	}
}