import "./Preview.css";
import photo from "../assets/images/background.png";
import line from "../assets/images/line.png";
import cursor from "../assets/images/cursor.svg";
import file from "../assets/images/file.svg";
import puzzle from "../assets/images/puzzle.svg";
import hear from "../assets/images/heart.svg";
import donut from "../assets/images/donut.png";
import linesecond from "../assets/images/linesecond.png";
import pink from "../assets/images/pink.png";
import cube from "../assets/images/cube.svg";
import izmurd from "../assets/images/izmurd.png";
import restange from "../assets/images/restange.png";
import ponchik from "../assets/images/ponchik.svg";
import linethird from "../assets/images/linethird.svg";
import crayon from "../assets/images/crayon.svg";
import shuriken from "../assets/images/shuriken.svg";
import message from "../assets/images/message.svg";
import raindrop from "../assets/images/raindrop.svg";
const Preview = () => {
	return (
		<div>
			<div className="container">
				<h1 className="text_third">
					Делайте снимки <br /> и записывайте экран <br /> <span> в 1клик</span>
				</h1>
				<p className="text_fourth">
					Вместе со Screenshoter можно в один клик сделать <br /> <br /> снимок
					или записать происходящее на экране ПК, <br /> <br /> что бы
					поделиться с кем угодно
				</p>
				<button className="button_download">Скачать бесплатно</button>
				<div className="papa">
					<div className="block_border">
						<img className="background" src={photo} alt="background_photo" />
					</div>
				</div>
				<img className="line" src={line} alt="line" />
				<div className="text_flexbox">
					<h1 className="text_fifth">
						Встречайте-скриншоты <br /> и запись экрана <span> 2 в 1</span>
					</h1>
					<p className="text_sixth">
						Больше не нужно искать две отдельные программы <br /> для скриншотов
						и записи экрана. Screenshoter поможет сделать. <br />{" "}
						<span>
							снимок экрана, записать видео и поделиться им с кем угодно.
						</span>{" "}
						<br /> Можно выделить весь экран, определенную область или <br />{" "}
						активно окно
					</p>
				</div>
				<div className="pahan">
					<div className="syn">
						<p className="text_seventh">
							<div className="center">
								<img className="icon" src={cursor} alt="cursor" />
							</div>
							Снимок и запись <br /> экрана в 1 клик
						</p>
					</div>
					<div className="syn">
						<p className="text_seventh">
							<div className="center">
								<img className="icon" src={file} alt="file" />
							</div>
							Моментальная <br /> ссылка на файл
						</p>
					</div>
					<div className="syn">
						<p className="text_seventh">
							<div className="center">
								<img className="icon" src={puzzle} alt="puzzle" />
							</div>
							Удобный <br /> редактор снимков
						</p>
					</div>
					<div className="syn">
						<p className="text_seventh">
							<div className="center">
								<img className="icon" src={hear} alt="heart" />
							</div>
							Бесплатно <br /> и без регистрации
						</p>
					</div>
				</div>
				<img className="donut_photo" src={donut} alt="donut" />
				<img className="line_second" src={linesecond} alt="lineSecond" />
				{/* !!!!!!!!! */}
				<div className="blocks">
					<p className="text_eight">gif.</p>
				</div>
				<h1 className="text_ninth">Запись экрана</h1> <br /> <br />
				<p className="text_tenth">
					Недостаточно снимков? Запишите происходящее <br /> на экране со своим
					голосом или звуком системы. <br /> <br />{" "}
					<span>Достаточно нажать две кнопки мыши,</span> выделить <br />{" "}
					необходимую область и начнется запись видео <br /> с экрана. Быстро и
					без сложных настроек
				</p>
				<h1 className="text_eleventh">В один клик</h1>
				<p className="text_twelth">
					Не нужно запоминать комбинации клавиш <br />{" "}
					<span>
						на клавиаутре, что бы сделать скриншот или начать <br /> записывать
						видео с экрана. <br /> <br /> Просто нажмите две кнопки мыши <br />{" "}
						или настройте горячую кнопку на любую удобную <br /> клавишу
					</span>
				</p>
				<div className="block">
					<p className="text_eight">gif.</p>
				</div>
				{/* !!!!!!!!! */}
				{/* !!!!!!!!! */}
				<div className="blocks">
					<p className="text_eight">gif.</p>
				</div>
				<h1 className="text_ninth">Многовенная ссылка</h1> <br /> <br />
				<p className="text_tenth">
					Многовенное получение ссылки снимок <br /> или видео. Вы только нажали
					Enter, а ссылка уже <br /> в буфере обмена. Перейдя по ссылке, можно
					будет <br /> посмотреть ваш снимок или записанное видео
				</p>
				<h1 className="text_eleventh">И редактор снимков</h1>
				<p className="text_twelth">
					Более 5 инструментов{" "}
					<span>
						для редактирования <br /> Выделяете область и редактируете. <br />{" "}
						<br /> Если неверно выбрали область - не беда, можно без <br />{" "}
						проблем ее передвинуть и/или изменить размер, <br /> не удаляя то,
						что ужн нарисованно!
					</span>
				</p>
				<div className="block">
					<p className="text_eight">gif.</p>
				</div>
				{/* !!!!!!!!! */}
				<div className="photo_flex">
					<img src={pink} alt="pink" />
				</div>
				<div className="cube_flex">
					<img className="cube" src={cube} alt="cube" />
				</div>
				<img className="izmurd" src={izmurd} alt="izmurd" />
				<div className="restange">
					<img src={restange} alt="restange" />
				</div>
				<div className="ponchik">
					<img src={ponchik} alt="ponchik" />
				</div>
				<img className="linethird" src={linethird} alt="line" />
				<div className="blocks_second">
					<div className="pahan">
						<div className="syn">
							<p className="text_seventh">
								<div className="center">
									<img className="icon" src={crayon} alt="cursor" />
								</div>
								Выбирайте цвет <br /> и рисуйте карандашом
							</p>
						</div>
						<div className="syn">
							<p className="text_seventh">
								<div className="center">
									<img className="icon" src={shuriken} alt="file" />
								</div>
								Используйте стрелку, <br /> круг или квадрат <br /> для
								выделения
							</p>
						</div>
						<div className="syn">
							<p className="text_seventh">
								<div className="center">
									<img className="icon" src={message} alt="puzzle" />
								</div>
								Оставляйте <br /> комментарии
							</p>
						</div>
						<div className="syn">
							<p className="text_seventh">
								<div className="center">
									<img className="icon" src={raindrop} alt="heart" />
								</div>
								Размывайте <br /> необходимую <br /> область
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Preview;
