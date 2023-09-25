class e{constructor(e){return this.news=e,this.card=document.createElement("article"),this.card.classList.add("news-card"),this.link=document.createElement("a"),this.link.classList.add("news-card__link"),this.link.href="news-item.html",e.cover&&(this.aside=document.createElement("aside"),this.aside.classList.add("news-card__aside"),this.createFigure(),this.link.append(this.aside)),this.content=document.createElement("div"),this.content.classList.add("news-card__content"),this.createTitle(),this.createDescription(),this.createDate(),this.link.append(this.content),this.card.append(this.link),this.card}createFigure(){this.figure=document.createElement("figure"),this.figure.classList.add("news-card__figure"),this.image=document.createElement("img"),this.image.alt=this.news.title,this.image.classList.add("news-card__image"),this.image.src=this.news.cover,this.figure.append(this.image),this.aside.append(this.figure)}createTitle(){this.title=document.createElement("div"),this.title.classList.add("news-card__title"),this.title.textContent=this.news.title,this.content.append(this.title)}createDescription(){this.description=document.createElement("div"),this.description.classList.add("news-card__description"),this.description.textContent=this.news.description,this.content.append(this.description)}createDate(){this.date=document.createElement("div"),this.date.classList.add("news-card__date"),this.date.textContent=this.news.date,this.content.append(this.date)}}const t=document.querySelector(".news-list");[{title:"10\xa0тысяч студентов со\xa0всей России примут участие в\xa0полуфинале Всероссийского студенческого конкурса \xabТвой ход\xbb",/*description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean egestas nec ex vitae tincidunt. Integer at augue cursus, vestibulum dolor vel, euismod enim. Praesent.',*/date:"8 сентября 2021 г",cover:"images/backgrounds/2.png"},{title:"У\xa0студентов на\xa0карманные расходы уходит больше,\xa0— учащаяся магистратуры о\xa0ежемесячных выплатах по\xa0образовательному кредиту",/*description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis gravida sollicitudin. Duis sodales consectetur dignissim. Suspendisse non nisi sollicitudin, varius nisl eget, semper.',*/date:"10 сентября 2021 г",cover:"images/backgrounds/3.png"},{title:"Первая российско-испанская молодёжная встреча определила три приоритетных направления сотрудничества между молодёжью двух стран",/*description: 'Twee distillery kitsch hammock kale chips. Blue bottle affogato tilde etsy flannel. Literally farm-to-table mlkshk leggings waistcoat.',*/date:"10 сентября 2021 г",cover:"images/backgrounds/4.png"},{title:"Валерий Фальков: Полный перевод высшего образования на\xa0дистанционное обучение невозможен",/*description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',*/date:"13 сентября 2021 г",cover:"images/backgrounds/5.png"},{title:"Свершилось! Мы\xa0рады сообщить всем участникам, что список финалистов готов!",/*description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet nunc bibendum, mollis ipsum sit amet, viverra leo. Maecenas elementum tincidunt neque. Curabitur.',*/date:"6 октября 2021 г",cover:"images/backgrounds/6.png"}].reverse().forEach((s,i)=>{let a=document.createElement("li");a.classList.add("news-list__item");let n=new e(s);a.append(n),t.append(a),0===i&&(a.classList.add("news-list--wide"),n.classList.add("news-card--recent"))});/*const newsList = document.querySelector('.news-list');

news.forEach((newsItem) => {
	const NewsCard = document.createElement('li');
	NewsCard.classList.add('NewsCard');
	const newsListLink = document.createElement('a');
	newsListLink.classList.add('news-card__link');
	const newsListAside = document.createElement('aside');
	newsListAside.classList.add('news-card__aside');
	const NewsCardThumbnail = document.createElement('figure');
	NewsCardThumbnail.classList.add('news-card__figure');
	const NewsCardImage = document.createElement('img');
	NewsCardImage.alt = newsItem.title;
	NewsCardImage.classList.add('news-card__image');
	NewsCardImage.src = newsItem.cover;
	NewsCardThumbnail.append(NewsCardImage);
	newsListAside.append(NewsCardThumbnail);
	const newsListContent = document.createElement('div');
	newsListContent.classList.add('news-card__content');
	const NewsCardTitle = document.createElement('div');
	NewsCardTitle.classList.add('news-card__title');
	NewsCardTitle.textContent = newsItem.title;
	const NewsCardDescription = document.createElement('div');
	NewsCardDescription.classList.add('news-card__description');
	NewsCardDescription.textContent = newsItem.description;
	const NewsCardDate = document.createElement('div');
	NewsCardDate.classList.add('NewsCard__date');
	NewsCardDate.textContent = newsItem.date;
	newsListContent.append(NewsCardTitle, NewsCardDescription, NewsCardDate);
	newsListLink.append(newsListAside, newsListContent);
	NewsCard.append(newsListLink);
	news - list.append(NewsCard);
});*/