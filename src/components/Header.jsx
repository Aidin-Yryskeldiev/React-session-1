import "./Header.css";
import logo from "../assets/images/logo.svg";
const Header = () => {
	return (
		<div>
			<div className="container">
				<header>
					<img className="logo" src={logo} alt="logo" />
					<p className="text_first">Screenshooter+</p>
					<p className="text_second">Скриншот и запись экрана в 1 клик</p>
					<ul>
						<li>
							<a href="#">Функции</a>
							<a href="#">Преимущества</a>
							<a href="#">Как использовать</a>
							<a href="#">Частые вопросы</a>
						</li>
					</ul>
					<div className="flex_box">
						<select>
							<option>RU</option>
							<option>ENG</option>
						</select>
					</div>
				</header>
			</div>
		</div>
	);
};

export default Header;
