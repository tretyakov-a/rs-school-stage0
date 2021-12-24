(()=>{var __webpack_modules__={527:(module,__unused_webpack_exports,__webpack_require__)=>{!function webpackUniversalModuleDefinition(root,factory){module.exports=factory()}(__webpack_require__.g,(function(){return(()=>{var __webpack_modules__={641:module=>{module.exports=function anonymous(locals,escapeFn,include,rethrow){escapeFn=escapeFn||function(markup){return null==markup?"":String(markup).replace(_MATCH_HTML,encode_char)};var _ENCODE_HTML_RULES={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},_MATCH_HTML=/[&<>'"]/g;function encode_char(c){return _ENCODE_HTML_RULES[c]||c}var __output="";function __append(s){null!=s&&(__output+=s)}with(locals||{})__append('<button class="player__action-popup player__action-popup_show">\n  <svg viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path class="player__action-popup-play-btn" d="M66.2651 11.7212C65.7685 11.8411 63.3283 12.2693 60.8433 12.672C14.1708 20.2423 -7.90455 77.1726 20.9899 115.449C29.9882 127.369 50.6521 140.866 51.6756 135.492C51.8037 134.82 50.5736 133.971 47.5205 132.623C34.9949 127.091 23.6604 116.192 17.4762 103.733C-4.98486 58.4864 33.4435 7.28385 83.625 15.5953C91.1634 16.8443 92.4726 14.2411 85.0848 12.6921C81.7222 11.987 68.0793 11.2836 66.2651 11.7218V11.7212ZM66.5663 25.0636C57.7417 26.364 46.386 30.8823 46.386 33.0933C46.386 34.8088 47.6604 34.676 52.3181 32.475C77.8305 20.4212 108.891 33.61 118.133 60.4211C133.493 104.986 82.7834 142.71 44.2777 115.362C22.8809 100.166 17.9468 69.9821 33.3071 48.248C37.3831 42.4807 35.2382 40.0423 31.076 45.7122C5.43128 80.648 32.2057 129.994 75.4706 127.531C119.145 125.044 140.027 72.7104 109.973 41.0628C98.9551 29.4608 81.1807 22.9092 66.5669 25.0624L66.5663 25.0636ZM119.076 32.9315C118.18 33.8274 118.865 35.4307 121.733 39.1565C142.993 66.7766 136.032 108.061 106.841 127.485C93.688 136.237 82.1392 138.663 60.5427 137.21C58.5088 137.073 58.1327 137.229 58.1327 138.21C58.1327 142.662 83.9823 141.455 96.799 136.403C134.382 121.592 149.2 73.7793 126.546 40.4203C122.247 34.0907 120.085 31.9228 119.076 32.9321L119.076 32.9315ZM55.063 55.484C53.9947 56.664 53.9031 58.0476 53.7396 75.4795C53.4708 104.137 50.6185 103.271 85.2212 85.0411C102.085 76.1563 102.18 76.435 77.9929 63.7476C59.0829 53.8281 57.1831 53.1431 55.063 55.484ZM75.9608 66.326C94.334 75.9224 94.4297 75.9821 93.1447 77.0486C91.7037 78.2451 58.9411 95.1809 58.0689 95.1809C57.3685 95.1809 57.2291 92.0315 57.2291 76.2053C57.2291 62.8949 57.4258 57.2291 57.887 57.2291C58.2484 57.2291 66.3821 61.3228 75.9614 66.326H75.9608Z" fill="white"/>\n  </svg>\n</button>\n<div class="player__control-panel">\n  <ul class="player__settings-menu">\n    <li class="player__settings-menu-item">\n      <div data-translate="playback-speed">Playback speed</div>\n      <div class="player__settings-menu-options">\n        <label class="player__custom-radio">\n          <input type="radio" name="playback" value="0.25">\n          <span class="player__custom-radio-checkbox"></span>\n          <span>0.25x</span>\n        </label> \n        <label class="player__custom-radio">\n          <input type="radio" name="playback" value="0.5">\n          <span class="player__custom-radio-checkbox"></span>\n          <span>0.5x</span>\n        </label>        \n        <label class="player__custom-radio">\n          <input type="radio" name="playback" value="1" checked>\n          <span class="player__custom-radio-checkbox"></span>\n          <span>normal</span>\n        </label>\n        <label class="player__custom-radio">\n          <input type="radio" name="playback" value="1.5">\n          <span class="player__custom-radio-checkbox"></span>\n          <span>1.5x</span>\n        </label>\n        <label class="player__custom-radio">\n          <input type="radio" name="playback" value="2">\n          <span class="player__custom-radio-checkbox"></span>\n          <span>2x</span>\n        </label>\n      </div>\n    </li>\n    <li class="player__settings-menu-item">\n      <div data-translate="skip-interval">Skip interval</div>\n      <div class="player__settings-menu-options">\n        <label class="player__custom-radio">\n          <input type="radio" name="skip" value="10">\n          <span class="player__custom-radio-checkbox"></span>\n          <span>10s</span>\n        </label>\n        <label class="player__custom-radio">\n          <input type="radio" name="skip" value="20" checked>\n          <span class="player__custom-radio-checkbox"></span>\n          <span>20s</span>\n        </label>\n        <label class="player__custom-radio">\n          <input type="radio" name="skip" value="30">\n          <span class="player__custom-radio-checkbox"></span>\n          <span>30s</span>\n        </label>\n      </div>\n    </li>\n  </ul>\n  <div class="player__progress-bar">\n    <div class="player__progress-bar-time-label"></div>\n    <div class="player__progress-bar-filler-wrapper">\n      <div class="player__progress-bar-filler"></div>\n    </div>\n  </div>\n  <div class="player__buttons">\n    <div class="player__buttons-group">\n      <button class="player__play player__button player__button_play" data-fn="play" title="play">\n        <div class="player__button-icon">\n        </div>\n      </button>\n      <button class="player__step-backward player__button player__button_backward" data-fn="backward" title="step backward">\n        <div class="player__button-icon">\n        </div>\n      </button>\n      <button class="player__step-forward player__button player__button_forward" data-fn="forward" title="step forward">\n        <div class="player__button-icon">\n        </div>\n      </button>\n      <button class="player__volume player__button player__button_volume-up" data-fn="mute" title="click: mute">\n        <div class="player__button-icon">\n        </div>\n        <div class="player__volume-slider" data-value="0.1">\n          <div class="player__volume-label"></div>\n          <div class="player__volume-slider-wrapper">\n            <div class="player__volume-slider-filler">\n            </div>\n          </div>\n        </div>\n      </button>\n      <div class="player__duration"></div>\n    </div>\n    <div class="player__buttons-group">\n      <button class="player__settings player__button player__button_settings" data-fn="settings">\n        <div class="player__button-icon">\n        </div>\n      </button>\n      <button class="player__toggle-fullscreen player__button player__button_expand" data-fn="toggle-fullscreen">\n        <div class="player__button-icon">\n        </div>\n      </button>\n    </div>\n  </div>\n</div>');return __output}}},__webpack_module_cache__={};function __nested_webpack_require_7172__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={exports:{}};return __webpack_modules__[moduleId](module,module.exports,__nested_webpack_require_7172__),module.exports}__nested_webpack_require_7172__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __nested_webpack_require_7172__.d(getter,{a:getter}),getter},__nested_webpack_require_7172__.d=(exports,definition)=>{for(var key in definition)__nested_webpack_require_7172__.o(definition,key)&&!__nested_webpack_require_7172__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__nested_webpack_require_7172__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),__nested_webpack_require_7172__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})};var __webpack_exports__={};return(()=>{"use strict";__nested_webpack_require_7172__.r(__webpack_exports__),__nested_webpack_require_7172__.d(__webpack_exports__,{default:()=>CustomVideoPlayer});const throttle=(ms,fn)=>{let cooldown=!1,savedArgs=null;return function wrapper(...args){cooldown?savedArgs=args:(cooldown=!0,fn.apply(null,args),setTimeout((()=>{cooldown=!1,savedArgs&&(wrapper.apply(null,savedArgs),savedArgs=null)}),ms))}},throttleDelayed=fn=>throttle.call(null,50,fn);function timeToText(time){const seconds=(time=Math.trunc(time))%60,minutes=Math.trunc(time/60)%60,hours=Math.trunc(time/60/60);return`${hours?`${hours}:`:""}${minutes}:${seconds<10?"0":""}${seconds}`}var player_controls=__nested_webpack_require_7172__(641),player_controls_default=__nested_webpack_require_7172__.n(player_controls);const defaultColors={theme:"darkblue",mainText:"white",darkText:"black",controlsBg:"rgba(0, 0, 0, 0.6)",settingsBg:"rgba(0, 0, 0, 0.9)",fillerBg:"rgba(255, 255, 255, 0.2)"};class CustomVideoPlayer{constructor(video,options={}){this.prefix="player",this.options=options,this.video=video,this.player=this.createPlayer(),this.setColors();const select=s=>this.player.querySelector(this.getSelector(s));this.playerActionPopup=select("action-popup"),this.controlPanel=select("control-panel"),this.settingsMenu=select("settings-menu"),this.playBtn=select("play"),this.volumeBtn=select("volume"),this.volumeLabel=select("volume-label"),this.fullscreenBtn=select("toggle-fullscreen"),this.volumeSlider=select("volume-slider"),this.volumeSliderFiller=select("volume-slider-filler"),this.durationLabel=select("duration"),this.progressBar=select("progress-bar"),this.progressBarFiller=select("progress-bar-filler"),this.progressBarTimeLabel=select("progress-bar-time-label"),this.isSettingsMenuVisible=!1,this.isProgressBarMouseDown=!1,this.isProgressBarMouseOver=!1,this.isVolumeSliderMouseDown=!1,this.isVolumeSliderMouseOver=!1,this.isFullscreen=!1,this.playbackRate=1,this.skipInterval=20,this.playerActionPopupDuration=400,this.volumeSliderWidth=60,this.timeLabelWidth=30,this.afkDelay=2e3,this.isUserAfk=!0,this.afkTimer=null,this.player.addEventListener("mouseenter",this.showControlPanel),this.player.addEventListener("mouseleave",this.hideControlPanel),this.playerActionPopup.addEventListener("click",this.toggleVideoPlay),this.video.addEventListener("click",this.toggleVideoPlay),this.video.addEventListener("play",this.handleVideoPlay),this.video.addEventListener("pause",this.handleVideoPause),this.video.addEventListener("volumechange",this.handleVolumeChange),this.video.addEventListener("timeupdate",this.handleProgress),this.volumeSlider.addEventListener("mousedown",this.handleVolumeSliderMouseDown),this.volumeSlider.addEventListener("mouseup",this.handleVolumeSliderMouseUp),this.volumeBtn.addEventListener("mouseover",this.handleVolumeSliderMouseOver),this.volumeBtn.addEventListener("mouseout",this.handleVolumeSliderMouseOut),this.progressBar.addEventListener("mousedown",this.handleProgressBarMouseDown),this.progressBar.addEventListener("mouseup",this.handleProgressBarMouseUp),this.progressBar.addEventListener("mouseover",this.handleProgressBarMouseOver),this.progressBar.addEventListener("mouseout",this.handleProgressBarMouseOut),document.addEventListener("click",this.handleDocumentClick),document.addEventListener("mousemove",throttleDelayed(this.handleDocumentMouseMove)),document.addEventListener("mouseup",this.handleDocumentMouseUp),this.controlPanel.addEventListener("click",this.handleControlPanelClick),this.video.volume=.1,this.video.pause()}setColors=()=>{const colors=this.options.colors||{},{theme,mainText,darkText,controlsBg,settingsBg,fillerBg}={...defaultColors,...colors},set=(prop,color)=>this.player.style.setProperty(prop,color);set("--player-main-color",theme),set("--player-main-text-color",mainText),set("--player-dark-text-color",darkText),set("--player-controls-bg-color",controlsBg),set("--player-menu-bg-color",settingsBg),set("--player-filler-bg",fillerBg)};createPlayer=()=>{const player=document.createElement("div");return player.classList.add(this.prefix),this.video.parentNode.insertBefore(player,this.video),this.video.classList.add(this.className("viewport")),this.video.removeAttribute("controls"),this.video.setAttribute("muted",!0),player.appendChild(this.video),player.insertAdjacentHTML("beforeend",player_controls_default()()),player};getSelector=name=>"."+this.className(name);className=name=>`${this.prefix}__${name}`;showControlPanel=()=>{this.controlPanel.classList.add(this.className("control-panel_show"))};hideControlPanel=()=>{this.controlPanel.classList.remove(this.className("control-panel_show")),this.hideSettingsMenu()};handleSettingsMenuClick=(_,radio)=>{const input=radio.querySelector("input");switch(input.name){case"playback":return void this.changePlaybackRate(input.value);case"skip":return void this.changeSkipInterval(input.value);default:return}};handleButtonClick=(_,btn)=>{switch(btn.dataset.fn){case"play":return void this.toggleVideoPlay();case"forward":return void this.skipVideo(this.skipInterval);case"backward":return void this.skipVideo(-this.skipInterval);case"mute":return void this.toggleVideoMute();case"settings":return void this.toggleSettingsMenu();case"toggle-fullscreen":return void this.toggleFullscreen();default:return}};handleControlPanelClick=e=>{const closest=(e,name)=>e.target.closest(this.getSelector(name)),handlers={"volume-slider":this.handleVolumeSliderChange,"custom-radio":this.handleSettingsMenuClick,button:this.handleButtonClick};let el=null;const handlerName=Object.keys(handlers).find((name=>el=closest(e,name)));handlerName&&handlers[handlerName](e,el)};changePlaybackRate=newValue=>{newValue!==this.playbackRate&&(this.playbackRate=newValue,this.video.playbackRate=this.playbackRate)};changeSkipInterval=newValue=>{this.skipInterval=newValue};toggleVideoPlay=()=>{const method=this.video.paused?"play":"pause";this.video[method]()};toggleFullscreen=()=>{const[compress,expand]=[this.className("button_compress"),this.className("button_expand")];this.isFullscreen&&document.exitFullscreen?(document.exitFullscreen(),this.isFullscreen=!1,this.fullscreenBtn.classList.replace(compress,expand),clearTimeout(this.afkTimer)):this.player.requestFullscreen&&(this.player.requestFullscreen(),this.isFullscreen=!0,this.fullscreenBtn.classList.replace(expand,compress))};toggleVideoMute=()=>{const{muted,volume}=this.video;muted&&0===volume||(this.video.muted=!muted,this.handleVolumeChange())};toggleSettingsMenu=()=>{this.isSettingsMenuVisible=!this.isSettingsMenuVisible,this.settingsMenu.style.display=this.isSettingsMenuVisible?"block":"none"};handleUserAfk=()=>{const noCursor=this.className("_no-cursor");this.isUserAfk=!1,this.showControlPanel(),this.player.classList.remove(noCursor),clearTimeout(this.afkTimer),this.afkTimer=setTimeout((()=>{this.isUserAfk=!0,this.hideControlPanel(),this.player.classList.add(noCursor)}),this.afkDelay)};handleDocumentClick=e=>{(function isElementClicked(event,className){const classes=Array.isArray(className)?className:[className];return event&&event.path.find((pathEl=>pathEl.classList&&classes.find((el=>pathEl.classList.contains(el)))))})(e,[this.className("settings-menu"),this.className("settings")])||this.hideSettingsMenu()};handleDocumentMouseMove=e=>{this.isFullscreen&&this.handleUserAfk(),this.isVolumeSliderMouseDown&&this.handleVolumeSliderChange(e),(this.isProgressBarMouseDown||this.isProgressBarMouseOver)&&this.handleProgressBarMouseMove(e)};handleDocumentMouseUp=e=>{this.handleVolumeSliderMouseUp(),this.handleProgressBarMouseUp()};hideSettingsMenu=()=>{this.isSettingsMenuVisible=!1,this.settingsMenu.style.display="none"};skipVideo=value=>{this.video.currentTime+=parseFloat(value)};showPlayerActionPopup=modificator=>{const className=this.className(`action-popup_${modificator}`);this.playerActionPopup.classList.add(className),setTimeout((()=>{this.playerActionPopup.classList.remove(className)}),this.playerActionPopupDuration)};handleVideoPlay=()=>{this.playerActionPopup.classList.remove(this.className("action-popup_show")),this.playBtn.classList.replace(this.className("button_play"),this.className("button_pause"))};handleVideoPause=()=>{this.playerActionPopup.classList.add(this.className("action-popup_show")),this.playBtn.classList.replace(this.className("button_pause"),this.className("button_play"))};handleVolumeChange=()=>{if(this.video.muted)this.volumeSlider.dataset.value=0,this.volumeSliderFiller.style.width="0%",this.volumeBtn.classList.replace(this.className("button_volume-up"),this.className("button_volume-mute"));else{const{volume}=this.video;this.volumeSlider.dataset.value=volume,this.volumeSliderFiller.style.width=100*volume+"%",this.volumeBtn.classList.replace(this.className("button_volume-mute"),this.className("button_volume-up"))}this.volumeLabel.textContent=this.volumeSliderFiller.style.width};handleVolumeSliderChange=e=>{const{x:volumeSliderX,width}=this.volumeSlider.getBoundingClientRect(),sliderWidth=this.isFullscreen?90:width,volume=+((e.clientX<volumeSliderX?0:e.clientX>volumeSliderX+sliderWidth?sliderWidth:e.clientX-volumeSliderX)/sliderWidth).toFixed(2);this.video.muted=0===volume,this.video.volume=volume};handleProgress=()=>{const{currentTime,duration}=this.video;this.durationLabel.textContent=`${timeToText(currentTime)} / ${timeToText(duration)}`;const percent=currentTime/duration*100;this.progressBarFiller.style.width=`${percent}%`};showTimeLabel=(time,offset)=>{this.progressBarTimeLabel.textContent=timeToText(time),this.progressBarTimeLabel.style.left=`${offset}px`};handleProgressBarMouseMove=e=>{const{x:progressBarX,width:progressBarWidth}=this.progressBar.getBoundingClientRect(),progressX=e.clientX<progressBarX?0:e.clientX>progressBarX+progressBarWidth?progressBarWidth:e.clientX-progressBarX,time=progressX/progressBarWidth*this.video.duration;this.isProgressBarMouseDown&&(this.video.currentTime=time);let offset=progressX-this.timeLabelWidth/2;offset<0&&(offset=0),offset>progressBarWidth-this.timeLabelWidth&&(offset=progressBarWidth-this.timeLabelWidth),this.progressBarTimeLabel.style.display="block",this.showTimeLabel(time,offset)};handleProgressBarMouseOver=e=>{this.isProgressBarMouseOver=!0};handleProgressBarMouseOut=()=>{this.isProgressBarMouseDown||(this.progressBarTimeLabel.style.display="none"),this.isProgressBarMouseOver=!1};handleProgressBarMouseDown=e=>{this.video.pause(),this.isProgressBarMouseDown=!0,this.handleProgressBarMouseMove(e)};handleProgressBarMouseUp=e=>{this.isProgressBarMouseDown&&(this.video.play(),this.isProgressBarMouseDown=!1,this.isProgressBarMouseOver||this.handleProgressBarMouseOut(e))};handleVolumeSliderMouseDown=e=>{this.isVolumeSliderMouseDown=!0,this.handleVolumeSliderChange(e)};hideVolumeSlider=()=>{this.volumeBtn.classList.remove(this.className("volume_show"))};showVolumeSlider=()=>{this.volumeBtn.classList.add(this.className("volume_show"))};handleVolumeSliderMouseUp=()=>{this.isVolumeSliderMouseOver||this.hideVolumeSlider(),this.isVolumeSliderMouseDown=!1};handleVolumeSliderMouseOut=()=>{this.isVolumeSliderMouseOver=!1,this.isVolumeSliderMouseDown||this.hideVolumeSlider()};handleVolumeSliderMouseOver=()=>{this.isVolumeSliderMouseOver=!0,this.showVolumeSlider()}}})(),__webpack_exports__})()}))},183:module=>{"use strict";module.exports="## Требования к функционалу\n1. Смена изображений в секции `portfolio` +25  \n   Изображения разных времён года получаем из [папок](https://github.com/rolling-scopes-school/stage1-tasks/tree/portfolio-stage0/assets/img) с соответствующими названиями  \n   Изображения можно заменить на другие с целью улучшения качества созданного приложения\n   - при кликах по кнопкам `Winter`, `Spring`, `Summer`, `Autumn` в секции `portfolio` отображаются изображения из папки с соответствующим названием +20\n   - кнопка, по которой кликнули, становится активной т.е. выделяется стилем. Другие кнопки при этом будут неактивными +5\n2. Перевод страницы на два языка +25  \n   Для перевода можно воспользоваться файлом [translate.js](https://github.com/rolling-scopes-school/stage1-tasks/blob/portfolio-stage0/translate.js)  \n   Содержание файла можно редактировать или полностью изменить с целью улучшения качества созданного приложения\n   - при клике по надписи `ru` англоязычная страница переводится на русский язык +10\n   - при клике по надписи `en` русскоязычная страница переводится на английский язык +10\n   - надписи `en` или `ru`, соответствующие текущему языку страницы, становятся активными т.е. выделяются стилем +5\n3. Возможность переключения светлой и тёмной темы +25  \n   Внешний вид тёмной темы соответствует макету, внешний вид светлой темы соответствует демо  \n   Во внешний вид светлой темы можно вносить изменения с целью улучшения качества созданного приложения  \n   На страницу добавлен переключатель при клике по которому: \n   - тёмная тема приложения сменяется светлой +10\n   - светлая тема приложения сменяется тёмной +10\n   - после смены светлой и тёмной темы интерактивные элементы по-прежнему изменяют внешний вид при наведении и клике и при этом остаются видимыми на странице (нет ситуации с белым шрифтом на белом фоне) +5\n4. Дополнительный функционал: сложные эффекты для кнопок при наведении и/или клике +10  \n   Для получения максимального балла за пункт требований достаточно добавить кнопкам только один эффект  \n   Можно выбрать любой из предложенных эффектов или добавить свой собственный равноценный им по сложности      \n   - Ripple Button [Демо](https://irinainina.github.io/50projects50days/button-ripple-effect/)\n   - Fluent Button [Демо](https://codepen.io/d2phap/full/rpJEaK)\n   - Particles Button [Демо](https://codepen.io/chandrashekhar/pen/JLxvBG)\n   - Bubbly Button [Демо](https://codepen.io/irinainina/pen/XWJmajM)\n   - Button Hover Effects [Демо](https://codepen.io/kjbrum/pen/wBBLXx)\n   - Box-shadow Button [Демо](https://codepen.io/wwer91/pen/wRWJme)"}},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={exports:{}};return __webpack_modules__[moduleId](module,module.exports,__webpack_require__),module.exports}__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop);var __webpack_exports__={};(()=>{"use strict";var main=__webpack_require__(527),main_default=__webpack_require__.n(main);__webpack_require__(183);const hamburger=document.querySelector(".menu-hamburger"),headerMenu=document.querySelector(".header-menu"),headerNav=document.querySelector(".header__nav");function handleDocumentClick(e){const isShowed=headerNav.classList.contains("header__nav_show");e.target.closest(".menu-hamburger")&&!isShowed&&headerNav.classList.add("header__nav_show"),isShowed&&function hide(){headerNav.classList.remove("header__nav_show"),hamburger.classList.add("menu-hamburger_hide"),headerMenu.classList.add("header-menu_hide"),setTimeout((()=>{headerMenu.classList.remove("header-menu_hide"),hamburger.classList.remove("menu-hamburger_hide")}),200)}()}const buttonsContainer=document.querySelector(".portfolio__buttons-group"),buttons=buttonsContainer.querySelectorAll(".button"),works=document.querySelectorAll(".portfolio__works");function handleButtonClick(e){const btn=e.target.closest(".button"),folder=btn.dataset.folder;for(const btn of buttons)btn.classList.remove("button_filled");btn.classList.add("button_filled");for(const work of works)work.classList.remove("portfolio__works_active"),work.dataset.folder===folder&&work.classList.add("portfolio__works_active")}let currentLanguage="en";const languages=["en","ru"],links=document.querySelectorAll(".language-switcher__link");function handleTranslateLinkClick(e){e.preventDefault();const language=e.target.dataset.language;language!==currentLanguage&&translate(language)}function translate(language){const translatedElements=document.querySelectorAll("[data-translate]");currentLanguage=language,localStorage.setItem("language",currentLanguage),function setActiveLink(language){for(const link of links)link.classList.remove("language-switcher__link_active"),link.dataset.language===language&&link.classList.add("language-switcher__link_active")}(language);for(const el of translatedElements){const translationKey=el.dataset.translate;el.textContent=i18Obj[language][translationKey]}}const i18Obj={en:{skills:"Skills",portfolio:"Portfolio",video:"Video",price:"Price",contacts:"Contacts","hero-title":"Alexa Rise","hero-text":"Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise",hire:"Hire me","skill-title-1":"Digital photography","skill-text-1":"High-quality photos in the studio and on the nature","skill-title-2":"Video shooting","skill-text-2":"Capture your moments so that they always stay with you","skill-title-3":"Rotouch","skill-text-3":"I strive to make photography surpass reality","skill-title-4":"Audio","skill-text-4":"Professional sounds recording for video, advertising, portfolio",winter:"Winter",spring:"Spring",summer:"Summer",autumn:"Autumn","price-descripton-1-span-1":"One location","price-descripton-1-span-2":"120 photos in color","price-descripton-1-span-3":"12 photos in retouch","price-descripton-1-span-4":"Readiness 2-3 weeks","price-descripton-1-span-5":"Make up, visage","price-descripton-2-span-1":"One or two locations","price-descripton-2-span-2":"200 photos in color","price-descripton-2-span-3":"20 photos in retouch","price-descripton-2-span-4":"Readiness 1-2 weeks","price-descripton-2-span-5":"Make up, visage","price-descripton-3-span-1":"Tree locations or more","price-descripton-3-span-2":"300 photos in color","price-descripton-3-span-3":"50 photos in retouch","price-descripton-3-span-4":"Readiness 1 weeks","price-descripton-3-span-5":"Make up, visage, hairstyle",order:"Order shooting","contact-me":"Contact with me","send-message":"Send message","skip-interval":"Skip interval","playback-speed":"Playback speed"},ru:{skills:"Навыки",portfolio:"Портфолио",video:"Видео",price:"Цены",contacts:"Контакты","hero-title":"Алекса Райс","hero-text":"Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом",hire:"Пригласить","skill-title-1":"Фотография","skill-text-1":"Высококачественные фото в студии и на природе","skill-title-2":"Видеосъемка","skill-text-2":"Запечатлите лучшие моменты, чтобы они всегда оставались с вами","skill-title-3":"Ретушь","skill-text-3":"Я стремлюсь к тому, чтобы фотография превосходила реальность","skill-title-4":"Звук","skill-text-4":"Профессиональная запись звука для видео, рекламы, портфолио",winter:"Зима",spring:"Весна",summer:"Лето",autumn:"Осень","price-descripton-1-span-1":"Одна локация","price-descripton-1-span-2":"120 цветных фото","price-descripton-1-span-3":"12 отретушированных фото","price-descripton-1-span-4":"Готовность через 2-3 недели","price-descripton-1-span-5":"Макияж, визаж","price-descripton-2-span-1":"Одна-две локации","price-descripton-2-span-2":"200 цветных фото","price-descripton-2-span-3":"20 отретушированных фото","price-descripton-2-span-4":"Готовность через 1-2 недели","price-descripton-2-span-5":"Макияж, визаж","price-descripton-3-span-1":"Три локации и больше","price-descripton-3-span-2":"300 цветных фото","price-descripton-3-span-3":"50 отретушированных фото","price-descripton-3-span-4":"Готовность через 1 неделю","price-descripton-3-span-5":"Макияж, визаж, прическа",order:"Заказать съемку","contact-me":"Свяжитесь со мной","send-message":"Отправить","skip-interval":"Интервал прокрутки","playback-speed":"Скорость воспроизведения"}},theme_link=document.querySelector(".theme-switcher__link"),root=document.querySelector(":root");let currentTheme="dark";function handleThemeSwitcherClick(e){currentTheme="dark"===currentTheme?"light":"dark",changeTheme(currentTheme)}function changeTheme(theme){currentTheme=theme,localStorage.setItem("theme",theme);const prevTheme="dark"===currentTheme?"light":"dark";root.classList.remove(prevTheme),root.classList.add(currentTheme),theme_link.classList.remove(`theme-switcher__link_${prevTheme}`),theme_link.classList.add(`theme-switcher__link_${currentTheme}`)}const video=document.querySelector(".video__player-img");new(main_default())(video,{colors:{theme:"#bdae82",mainText:"white",darkText:"black",controlsBg:"rgba(0, 0, 0, 0.6)",settingsBg:"rgba(0, 0, 0, 0.9)",fillerBg:"rgba(255, 255, 255, 0.2)"}});!function initHeaderMenu(){document.addEventListener("click",handleDocumentClick)}(),function init(){buttonsContainer.addEventListener("click",handleButtonClick)}(),function translate_init(){const language=localStorage.getItem("language");language&&currentLanguage!==language&&languages.includes(language)&&translate(language);for(const link of links)link.addEventListener("click",handleTranslateLinkClick)}(),function theme_init(){const theme=localStorage.getItem("theme");theme&&theme!==currentTheme&&changeTheme(theme),theme_link.addEventListener("click",handleThemeSwitcherClick)}()})()})();