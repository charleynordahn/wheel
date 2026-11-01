var e=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},t=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n,r=e((()=>{n=[{id:`daily-activities`,title:`Hverdagsaktiviteter`,icon:`calendarCheck`,items:[`Fald`,`Øget behov for hjælp/hjælpemidler`,`Sengeligende`,`Mobilitet`,`Pletter på tøjet`,`Usoigneret`]},{id:`home-environment`,title:`Hjemmet`,icon:`house`,items:[`Forfald`,`Lugt`,`Snavs`,`Visne blomster`,`Gammel mad`,`Ophobet affald`,`Løse tæpper`]},{id:`eating-drinking`,title:`Spise/drikke`,icon:`utensils`,items:[`Tøjet sidder løsere`,`Appetit`,`Væskeindtag`,`Køleskab`,`Tandstatus`,`Synkebesvær`,`Vægttab`,`Spises maden`,`Kvalme`]},{id:`physical-symptoms`,title:`Fysiske klager`,icon:`heartPulse`,items:[`Akut`,`Træt`,`Smerter`,`Forvirring`,`Feber`,`Vandladning`,`Afføring`,`Hævede ben`,`Svimmel`,`Åndenød`,`Syn/hørelse`]},{id:`mental-social`,title:`Psykisk-socialt`,icon:`brain`,items:[`Tristhed`,`Tab af hukommelse`,`Passivitet`,`Forvirret`,`Søvn`,`Beklagende`,`Udafreagerende`,`Netværk`,`Isolerer sig`]},{id:`medication-intake`,title:`Medicinindtagelse`,icon:`pill`,items:[`Nyudskrevet borger`,`Ny medicin`,`Tager borger sin medicin`,`Tager borgeren medicin ved siden af`,`Gammel medicin i skabet`]}]})),i,a=e((()=>{i={calendarCheck:`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M8 2v3"/>
            <path d="M16 2v3"/>
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <path d="M3 9h18"/>
            <path d="m9 15 2 2 4-4"/>
        </svg>
    `,house:`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m3 10 9-7 9 7"/>
            <path d="M5 9v12h14V9"/>
            <path d="M9 21v-8h6v8"/>
        </svg>
    `,utensils:`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 2v7a4 4 0 0 0 4 4h0a4 4 0 0 0 4-4V2"/>
            <path d="M7 2v20"/>
            <path d="M21 15V2a5 5 0 0 0-5 5v8h5Zm0 0v7"/>
        </svg>
    `,heartPulse:`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/>
            <path d="M3 12h5l2-4 4 8 2-4h5"/>
        </svg>
    `,brain:`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 18V5a3 3 0 0 0-5.8-1A4 4 0 0 0 4 11a4 4 0 0 0 2 7.5A3 3 0 0 0 12 18Z"/>
            <path d="M12 18V5a3 3 0 0 1 5.8-1A4 4 0 0 1 20 11a4 4 0 0 1-2 7.5A3 3 0 0 1 12 18Z"/>
        </svg>
    `,pill:`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m10.5 20.5 10-10a5.7 5.7 0 0 0-8-8l-10 10a5.7 5.7 0 0 0 8 8Z"/>
            <path d="m8.5 8.5 7 7"/>
        </svg>
    `,chevronDown:`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m6 9 6 6 6-6"/>
    </svg>
    `}}));t((()=>{r(),a();var e=document.querySelector(`#focus-areas-container`);e.innerHTML=n.map(e=>`
		<section id="${e.id}" class="focus-area-wrapper">
			<button class="focus-area-button">
				<div class="focus-area-icon">
					${i[e.icon]}
				</div>

				<h2 class="focus-area-title">
					${e.title}
				</h2>

				<span class="accordion-icon">
					${i.chevronDown}
				</span>
			</button>

			<div class="accordion-wrapper">
				<div class="accordion-container">
					<ul>
						${e.items.map(e=>`
							<li>${e}</li>
						`).join(``)}
					</ul>
				</div>
			</div>
		</section>
	`).join(``),(()=>{let e=document.querySelectorAll(`.accordion-wrapper`);e.forEach(t=>{let n=t.previousElementSibling;n.addEventListener(`click`,()=>{let r=t.classList.contains(`open`);e.forEach(e=>{e.classList.remove(`open`),e.previousElementSibling.classList.remove(`active`)}),r||(t.classList.add(`open`),n.classList.add(`active`))})})})()}))();