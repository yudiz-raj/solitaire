
// You can write more code here

/* START OF COMPILED CODE */

class Solitaire extends Phaser.Scene {

	constructor() {
		super("Solitaire");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// container_bg
		const container_bg = this.add.container(0, 0);

		// background
		const background = this.add.image(960, 540, "background");
		container_bg.add(background);

		// text_2
		const text_2 = this.add.text(696, 280, "", {});
		text_2.setOrigin(0.5, 0);
		text_2.text = "Turn 1";
		text_2.setStyle({ "color": "#001E82", "fontFamily": "BowlbyOne", "fontSize": "40px", "stroke": "#000" });
		container_bg.add(text_2);

		// btn_play_again
		const btn_play_again = this.add.image(696, 433, "button");
		btn_play_again.setInteractive(new Phaser.Geom.Rectangle(15, 30, 170, 60), Phaser.Geom.Rectangle.Contains);
		container_bg.add(btn_play_again);

		// txt_time
		const txt_time = this.add.text(696, 339, "", {});
		txt_time.setOrigin(0.5, 0);
		txt_time.text = "00:00";
		txt_time.setStyle({ "color": "#001E82", "fontFamily": "BowlbyOne", "fontSize": "40px", "stroke": "#000" });
		container_bg.add(txt_time);

		// container_body
		const container_body = this.add.container(0, 0);

		// delt_base_0
		const delt_base_0 = this.add.image(166, 364, "card_base-2");
		delt_base_0.scaleX = 1.6;
		delt_base_0.scaleY = 1.6;
		container_body.add(delt_base_0);

		// text_1
		const text_1 = this.add.text(166, 402, "", {});
		text_1.setOrigin(0.5, 0);
		text_1.alpha = 0.5;
		text_1.alphaTopLeft = 0.5;
		text_1.alphaTopRight = 0.5;
		text_1.alphaBottomLeft = 0.5;
		text_1.alphaBottomRight = 0.5;
		text_1.text = "REDEAL";
		text_1.setStyle({ "color": "#000", "fontFamily": "Verdana", "fontSize": "20px", "fontStyle": "bold", "stroke": "#000", "shadow.stroke": true, "shadow.fill": true });
		container_body.add(text_1);

		// btn_redeal
		const btn_redeal = this.add.image(166, 342, "redeal");
		btn_redeal.scaleX = 0.2;
		btn_redeal.scaleY = 0.2;
		btn_redeal.alpha = 0.5;
		btn_redeal.alphaTopLeft = 0.5;
		btn_redeal.alphaTopRight = 0.5;
		btn_redeal.alphaBottomLeft = 0.5;
		btn_redeal.alphaBottomRight = 0.5;
		container_body.add(btn_redeal);

		// delt_card
		const delt_card = this.add.image(166, 364, "back_red_1");
		delt_card.scaleX = 1.6;
		delt_card.scaleY = 1.6;
		container_body.add(delt_card);

		// delt_base_1
		const delt_base_1 = this.add.image(431, 364, "card_base-2");
		delt_base_1.scaleX = 1.6;
		delt_base_1.scaleY = 1.6;
		container_body.add(delt_base_1);

		// container_delt_cards_24
		const container_delt_cards_24 = this.add.container(0, 0);
		container_delt_cards_24.name = "container_delt_cards_24";
		container_body.add(container_delt_cards_24);

		// container_base_cards
		const container_base_cards = this.add.container(0, 0);

		// baseCard_0
		const baseCard_0 = new BaseCard(this, 961, 364);
		baseCard_0.name = "baseCard_0";
		container_base_cards.add(baseCard_0);

		// baseCard_1
		const baseCard_1 = new BaseCard(this, 1226, 364);
		baseCard_1.name = "baseCard_1";
		container_base_cards.add(baseCard_1);

		// baseCard_2
		const baseCard_2 = new BaseCard(this, 1491, 364);
		baseCard_2.name = "baseCard_2";
		container_base_cards.add(baseCard_2);

		// baseCard_3
		const baseCard_3 = new BaseCard(this, 1756, 364);
		baseCard_3.name = "baseCard_3";
		container_base_cards.add(baseCard_3);

		// container_bg_cards
		const container_bg_cards = this.add.container(0, 0);

		// card_base_0
		const card_base_0 = this.add.image(166, 625, "card_base-2");
		card_base_0.scaleX = 1.6;
		card_base_0.scaleY = 1.6;
		container_bg_cards.add(card_base_0);

		// card_base_1
		const card_base_1 = this.add.image(431, 625, "card_base-2");
		card_base_1.scaleX = 1.6;
		card_base_1.scaleY = 1.6;
		container_bg_cards.add(card_base_1);

		// card_base_2
		const card_base_2 = this.add.image(696, 625, "card_base-2");
		card_base_2.scaleX = 1.6;
		card_base_2.scaleY = 1.6;
		container_bg_cards.add(card_base_2);

		// card_base_3
		const card_base_3 = this.add.image(961, 625, "card_base-2");
		card_base_3.scaleX = 1.6;
		card_base_3.scaleY = 1.6;
		container_bg_cards.add(card_base_3);

		// card_base_4
		const card_base_4 = this.add.image(1226, 625, "card_base-2");
		card_base_4.scaleX = 1.6;
		card_base_4.scaleY = 1.6;
		container_bg_cards.add(card_base_4);

		// card_base_5
		const card_base_5 = this.add.image(1491, 625, "card_base-2");
		card_base_5.scaleX = 1.6;
		card_base_5.scaleY = 1.6;
		container_bg_cards.add(card_base_5);

		// card_base_6
		const card_base_6 = this.add.image(1756, 625, "card_base-2");
		card_base_6.scaleX = 1.6;
		card_base_6.scaleY = 1.6;
		container_bg_cards.add(card_base_6);

		// container_pure_sequence
		const container_pure_sequence = this.add.container(0, 0);

		// container_pure_piles_0
		const container_pure_piles_0 = this.add.container(0, 0);
		container_pure_piles_0.name = "container_pure_piles_0";
		container_pure_sequence.add(container_pure_piles_0);

		// container_pure_piles_1
		const container_pure_piles_1 = this.add.container(0, 0);
		container_pure_piles_1.name = "container_pure_piles_1";
		container_pure_sequence.add(container_pure_piles_1);

		// container_pure_piles_2
		const container_pure_piles_2 = this.add.container(0, 0);
		container_pure_piles_2.name = "container_pure_piles_2";
		container_pure_sequence.add(container_pure_piles_2);

		// container_pure_piles_3
		const container_pure_piles_3 = this.add.container(0, 0);
		container_pure_piles_3.name = "container_pure_piles_3";
		container_pure_sequence.add(container_pure_piles_3);

		// container_piles_main
		const container_piles_main = this.add.container(0, 1099);

		// container_piles_0
		const container_piles_0 = this.add.container(0, 0);
		container_piles_0.name = "container_piles_0";
		container_piles_main.add(container_piles_0);

		// container_piles_1
		const container_piles_1 = this.add.container(0, 0);
		container_piles_1.name = "container_piles_1";
		container_piles_main.add(container_piles_1);

		// container_piles_2
		const container_piles_2 = this.add.container(0, 0);
		container_piles_2.name = "container_piles_2";
		container_piles_main.add(container_piles_2);

		// container_piles_3
		const container_piles_3 = this.add.container(0, 0);
		container_piles_3.name = "container_piles_3";
		container_piles_main.add(container_piles_3);

		// container_piles_4
		const container_piles_4 = this.add.container(0, 0);
		container_piles_4.name = "container_piles_4";
		container_piles_main.add(container_piles_4);

		// container_piles_5
		const container_piles_5 = this.add.container(0, 0);
		container_piles_5.name = "container_piles_5";
		container_piles_main.add(container_piles_5);

		// container_piles_6
		const container_piles_6 = this.add.container(0, 0);
		container_piles_6.name = "container_piles_6";
		container_piles_main.add(container_piles_6);

		// container_top
		const container_top = this.add.container(0, 0);

		// container_toast
		const container_toast = this.add.container(10, 1000);
		container_toast.visible = false;

		// bg_toast
		const bg_toast = this.add.rectangle(0, 0, 500, 50);
		bg_toast.setOrigin(0, 0);
		bg_toast.isFilled = true;
		bg_toast.fillColor = 5670573;
		container_toast.add(bg_toast);

		// txt_toast
		const txt_toast = this.add.text(10, 25, "", {});
		txt_toast.setOrigin(0, 0.5);
		txt_toast.text = "New text";
		txt_toast.setStyle({ "fontFamily": "Verdana" });
		container_toast.add(txt_toast);

		this.btn_play_again = btn_play_again;
		this.txt_time = txt_time;
		this.btn_redeal = btn_redeal;
		this.delt_card = delt_card;
		this.container_delt_cards_24 = container_delt_cards_24;
		this.baseCard_3 = baseCard_3;
		this.container_pure_sequence = container_pure_sequence;
		this.container_piles_main = container_piles_main;
		this.container_top = container_top;
		this.bg_toast = bg_toast;
		this.txt_toast = txt_toast;
		this.container_toast = container_toast;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	btn_play_again;
	/** @type {Phaser.GameObjects.Text} */
	txt_time;
	/** @type {Phaser.GameObjects.Image} */
	btn_redeal;
	/** @type {Phaser.GameObjects.Image} */
	delt_card;
	/** @type {Phaser.GameObjects.Container} */
	container_delt_cards_24;
	/** @type {BaseCard} */
	baseCard_3;
	/** @type {Phaser.GameObjects.Container} */
	container_pure_sequence;
	/** @type {Phaser.GameObjects.Container} */
	container_piles_main;
	/** @type {Phaser.GameObjects.Container} */
	container_top;
	/** @type {Phaser.GameObjects.Rectangle} */
	bg_toast;
	/** @type {Phaser.GameObjects.Text} */
	txt_toast;
	/** @type {Phaser.GameObjects.Container} */
	container_toast;

	/* START-USER-CODE */

	// Write your code here
	showToast = (msg) => {
		this.txt_toast.setText(msg);
		this.bg_toast.width = this.txt_toast.width + 20;
		this.container_toast.setVisible(true);
		setTimeout(() => {
			this.container_toast.setVisible(false);
		}, 2000);
	}
	addDefaultCardsAnimation = (backCard, card, j) => {
		this.tweens.add({
			targets: this.container_piles_main,
			y: 0,
			duration: 350,
			onComplete: () => {
				this.tweens.add({
					targets: backCard,
					scaleX: 0,
					delay: 0 + (50 * j),
					duration: 100,
					onComplete: () => {
						backCard.destroy();
						this.tweens.add({
							targets: card,
							scaleX: 1,
							duration: 100,
							onComplete: () => {
								card.setInteractive({ draggable: true });
								if (j == 6) this.delt_card.setInteractive();
							}
						});
					}
				});

			}
		});
	}
	addDefaultCards = () => {
		const cardContainer = this.container_piles_main.list
		for (let i = 0; i <= 6; i++) {
			for (let j = 0; j <= i; j++) {
				let backCard;
				const cardName = i == j ? this.oGameManager.getRandomCard(this.aTotalCards) : "back_red_0";
				if (i == j) {
					const backCardName = "back_red_0";
					backCard = new Card(this, 166 + (265 * i), 625 + (45 * j));
					backCard.setCard(backCardName);
					backCard.setName(backCardName);
					backCard.setSize(180, 260);
					backCard.setScale(3.45);
					cardContainer[i].add(backCard);
				}
				const card = new Card(this, 166 + (265 * i), 625 + (45 * j));
				card.setCard(cardName);
				card.setName(cardName);
				card.setSize(180, 260);
				if (cardName == "back_red_0") {
					card.setScale(3.45);
				}
				if (cardName != "back_red_0") {
					card.setScale(0, 1);
					this.addDefaultCardsAnimation(backCard, card, j);
				}
				cardContainer[i].add(card);
			}
		}

	}
	addDeltCards = () => {
		for (let i = 1; i <= 24; i++) {
			this.aDeltCards.push(this.oGameManager.getRandomCard(this.aTotalCards));
		}
	}
	isReverseSequence(array) {
		if (array.length <= 1) {
			return true;
		}
		for (let i = 1; i < array.length; i++) {
			if (array[i] - array[i - 1] !== -1) {
				return false;
			}
		}
		return true;
	}
	create() {
		document.title = "Solitaire";
		this.oGameManager = new GameManager(this);
		this.oInputManager = new InputManager(this);
		this.editorCreate();
		this.aTotalCards = this.oGameManager.aSolitaireCards;
		this.aDeltCards = [];
		this.aDeltedCards = [];
		this.addDefaultCards();
		this.addDeltCards();
		this.nTotalSequence = 0;
		this.lastContainer = null;
		this.isCardDragging = false;
		this.isCardDraggable = false;
		this.nGameTime = 0;
		this.nGameInteraval = setInterval(() => {
			this.nGameTime++;
			const minutes = Math.floor(this.nGameTime / 60);
			const seconds = this.nGameTime % 60;
			this.txt_time.setText(`${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
		}, 1000);
		this.oToasts = {
			drop: "Cannot drop: Your card need to be one rank down with different color.",
			samesuit: "Cannot drop: Your card need to be one rank up with same suit.",
			highcard: "Cannot drop: Your card need to be high card.",
		}

		this.input.on('dragstart', (pointer, gameObject, dragX, dragY) => {
			this.lastContainer = gameObject.parentContainer
			const cardIndex = gameObject.parentContainer.list.indexOf(gameObject);
			const containerLength = gameObject.parentContainer.list.length;
			const aSequence = [];
			let aCards = [];
			if (cardIndex != containerLength - 1) {
				for (let i = cardIndex; i < containerLength; i++) {
					aSequence.push(parseInt(this.lastContainer.list[i].name.match(/\d+/)[0]));
					aCards.push(this.lastContainer.list[i]);
				}
				if (this.isReverseSequence(aSequence)) {
					aCards.forEach((card) => this.container_top.add(card))
					this.isCardDraggable = true;
				} else {
					aCards = [];
				}
			} else {
				aCards.push(gameObject);
				this.container_top.add(gameObject);
				this.isCardDraggable = true;
			}
		});
		this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
			if (this.isCardDraggable) {
				gameObject.parentContainer.list.forEach((card, i) => this.moveCard(card, dragX, dragY + (i * 45)))
			}
		});
		this.input.on('dragend', (pointer, gameObject) => {
			if (this.isCardDragging) {
				this.isCardDragging = false;
				this.isCardDraggable = false;
				this.checkContainer(pointer.x, pointer.y, gameObject);
			} else {
				gameObject.parentContainer.each((card) => this.lastContainer.add(card));
			}
		});
		this.delt_card.on('pointerdown', () => this.deltCard());
		this.btn_redeal.on('pointerdown', () => {
			this.reDealCards();
			this.btn_redeal.disableInteractive();
		});
		this.oInputManager.buttonClick(this.btn_play_again);
	}
	moveCard(gameObject, x, y) {
		this.isCardDragging = true;
		gameObject.x = x;
		gameObject.y = y;
	}
	checkContainer = (x, y, gameObject) => {
		if (y > 450) {
			switch (true) {
				case (x >= 34 && x < 293):
					this.checkLastCard(this.container_piles_main.list[0], 0);
					break;
				case (x >= 293 && x < 556):
					this.checkLastCard(this.container_piles_main.list[1], 1);
					break;
				case (x >= 556 && x < 823):
					this.checkLastCard(this.container_piles_main.list[2], 2);
					break;
				case (x >= 823 && x < 1085):
					this.checkLastCard(this.container_piles_main.list[3], 3);
					break;
				case (x >= 1085 && x < 1355):
					this.checkLastCard(this.container_piles_main.list[4], 4);
					break;
				case (x >= 1355 && x < 1616):
					this.checkLastCard(this.container_piles_main.list[5], 5);
					break;
				case (x >= 1616 && x < 1900):
					this.checkLastCard(this.container_piles_main.list[6], 6);
					break;
				default:
					this.checkLastCard(this.container_piles_main.list[0], 0);
					break;
			}
		} else {
			switch (true) {
				case (x >= 823 && x < 1085):
					this.checkPureCards(this.container_pure_sequence.list[0], 0);
					break;
				case (x >= 1085 && x < 1355):
					this.checkPureCards(this.container_pure_sequence.list[1], 1);
					break;
				case (x >= 1355 && x < 1616):
					this.checkPureCards(this.container_pure_sequence.list[2], 2);
					break;
				case (x >= 1616 && x < 1900):
					this.checkPureCards(this.container_pure_sequence.list[3], 3);
					break;
				default:
					this.checkPureCards(this.container_pure_sequence.list[0], 0);
					break;
			}
		}
	}
	backToPile = () => {
		this.container_top.each(card => this.lastContainer.add(card))
		this.arrangeCards(this.lastContainer, parseInt(this.lastContainer.name.match(/\d+/)[0]));
	}
	cardPlaceAnimation = (container) => {
		this.tweens.add({
			targets: container.list,
			ease: 'elastic-out',
			y: { from: container.list.y, to: container.list.y + 5 },
			duration: 20,
			yoyo: true
		});
	}
	checkLastCard = (container, index) => {
		if (container.length) {
			const lastCard = parseInt(container.list[container.list.length - 1].name.match(/\d+/)[0]);
			const dragCardNumber = parseInt(this.container_top.list[0].name.match(/\d+/)[0]);
			const dragCardSuit = this.container_top.list[0].name.split("_")[0];
			const lastCardSuit = container.list[container.list.length - 1].name.split("_")[0];
			if (dragCardNumber === lastCard - 1 && dragCardSuit != lastCardSuit) {
				if ((dragCardSuit == "spade" && lastCardSuit == "club") || (dragCardSuit == "club" && lastCardSuit == "spade") || (dragCardSuit == "heart" && lastCardSuit == "diamond") || (dragCardSuit == "diamond" && lastCardSuit == "heart")) {
					this.backToPile();
					this.showToast(this.oToasts.drop);
				} else {
					if (this.container_top.list.length == 1) this.checkDeltCard(this.container_top.list[0].name);
					this.cardPlaceAnimation(this.container_top);
					this.container_top.each(card => container.add(card));
					this.arrangeCards(container, index);
					this.openLastCard(this.lastContainer);
				}
			} else {
				this.backToPile();
				this.showToast(this.oToasts.drop);
			}
		} else {
			const dragCardNumber = parseInt(this.container_top.list[0].name.match(/\d+/)[0]);
			if (dragCardNumber == 13) {
				if (this.container_top.list.length == 1) this.checkDeltCard(this.container_top.list[0].name);
				this.container_top.each(card => container.add(card))
				this.arrangeCards(container, index);
				this.openLastCard(this.lastContainer);
				this.cardPlaceAnimation(container);
			} else {
				this.backToPile();
				this.showToast(this.oToasts.highcard);
			}
		}
		this.arrangeCards(this.lastContainer, parseInt(this.lastContainer.name.match(/\d+/)[0]));
	}
	checkPureCards = (container, index) => {
		const dragCardNumber = parseInt(this.container_top.list[0].name.match(/\d+/)[0]);
		const dragCardSuit = this.container_top.list[0].name.split("_")[0];
		if (this.container_top.list.length == 1) {
			if (container.list.length == 0) {
				if (dragCardNumber == 1 && this.container_top.list.length == 1) {
					if (this.container_top.list.length == 1) this.checkDeltCard(this.container_top.list[0].name);
					this.container_top.each(card => container.add(card))
					this.arrangeCards(container, index);
					this.openLastCard(this.lastContainer);
					this.cardPlaceAnimation(container);
				} else {
					this.backToPile();
					this.showToast(this.oToasts.highcard);
				}
			} else {
				const lastCard = container.list[container.list.length - 1];
				const lastCardSuit = lastCard.name.split("_")[0];
				const lastCardNumber = parseInt(lastCard.name.split("_")[1]);
				if (dragCardSuit == lastCardSuit && (dragCardNumber - 1) == lastCardNumber) {
					if (this.container_top.list.length == 1) this.checkDeltCard(this.container_top.list[0].name);
					this.container_top.each(card => container.add(card))
					this.arrangeCards(container, index);
					this.openLastCard(this.lastContainer);
				} else {
					this.backToPile();
					this.showToast(this.oToasts.samesuit);
				}
			}
		} else {
			this.backToPile();
			this.showToast(this.oToasts.samesuit);
		}
		this.arrangeCards(this.lastContainer, parseInt(this.lastContainer.name.match(/\d+/)[0]));
	}
	arrangeCards = (container, index) => {
		if (index == 24) {
			this.container_delt_cards_24.each(card => card.setPosition(431, 364));
		} else if (container.name.includes("container_pure_piles")) {
			container.each(card => card.setPosition(961 + (265 * index), 364));
			if (container.list.length == 13) {
				this.nTotalSequence++;
				if (this.nTotalSequence == 4) this.fireWorks();
			}
		}
		else {
			let gap = 45;
			if (container.list.length >= 13) gap = 40;
			if (container.list.length >= 15) gap = 38;
			if (container.list.length >= 16) gap = 36;
			if (container.list.length >= 17) gap = 34;
			if (container.list.length >= 18) gap = 32;
			if (container.list.length >= 19) gap = 30;
			if (container.list.length >= 20) gap = 29;
			if (container.list.length >= 21) gap = 28;
			if (container.list.length >= 22) gap = 27;
			if (container.list.length >= 23) gap = 26;
			if (container.list.length >= 24) gap = 25;
			if (container.list.length >= 25) gap = 24;
			if (container.list.length >= 26) gap = 23;
			if (container.list.length >= 28) gap = 22;
			if (container.list.length >= 29) gap = 20;
			if (container.list.length >= 30) gap = 18;
			container.list.forEach((card, i) => {
				card.x = 166 + (265 * index);
				card.y = 625 + (gap * i);
			});
		}
	}
	openLastCardAnimation = (container, card) => {
		this.tweens.add({
			targets: card,
			scaleX: 0,
			duration: 50,
			onComplete: () => {
				const cardName = this.oGameManager.getRandomCard(this.aTotalCards);
				const card = container.list[container.list.length - 1];
				card.setCard(cardName);
				card.setName(cardName);
				card.setScale(0, 1);
				card.setSize(180, 260);
				this.tweens.add({
					targets: card,
					scaleX: 1,
					duration: 50,
					onComplete: () => {
						card.setInteractive({ draggable: true });
					}
				});
			}
		})
	}
	openLastCard = (container) => {
		if (container.length) {
			const card = container.list[container.list.length - 1];
			if (card.name == "back_red_0") {
				this.openLastCardAnimation(container, card);
			}
		}
	}
	deltCardAnimation = (card) => {
		this.tweens.add({
			targets: card,
			scaleX: 1,
			duration: 150,
			onComplete: () => {
				this.tweens.add({
					targets: card,
					x: 431,
					duration: 150,
					onComplete: () => {
						this.delt_card.setInteractive();
						card.setInteractive({ draggable: true });
					}
				});
			}
		});
	}
	deltCard = () => {
		this.delt_card.disableInteractive();
		const cardName = this.oGameManager.getFirstCard(this.aDeltCards);
		this.aDeltedCards.push(cardName);
		const card = new Card(this, 166, 364);
		card.setCard(cardName);
		card.setName(cardName);
		card.setSize(180, 260);
		card.setScale(0, 1);
		this.deltCardAnimation(card);
		this.container_delt_cards_24.add(card);
		if (this.aDeltCards.length == 0) {
			this.btn_redeal.setInteractive();
			this.delt_card.setVisible(false);
		}
	}
	checkDeltCard = (cardName) => {
		if (this.aDeltedCards.includes(cardName)) this.aDeltedCards.pop();
	}
	reDealCardsAnimation = () => {
		for (let i = 0; i < this.container_delt_cards_24.list.length; i++) {
			this.tweens.add({
				targets: this.container_delt_cards_24.list[i],
				x: this.delt_card.x,
				scaleX: 0,
				duration: 100,
				delay: i * 50,
				onComplete: () => {
					this.delt_card.setVisible(true);
					if (i == this.container_delt_cards_24.list.length - 1)
						this.container_delt_cards_24.removeAll(true);
				}
			});
		}
	}
	reDealCards = () => {
		this.reDealCardsAnimation();
		if (this.aDeltedCards.length) {
			while (this.aDeltedCards.length) {
				this.aDeltCards.push(this.aDeltedCards.shift());
			}
		}
	}
	fireWorks = () => {
		clearInterval(this.nGameInteraval);
		const duration = 5 * 1000,
			animationEnd = Date.now() + duration,
			defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
		function randomInRange(min, max) {
			return Math.random() * (max - min) + min;
		}
		const interval = setInterval(function () {
			const timeLeft = animationEnd - Date.now();
			if (timeLeft <= 0) {
				return clearInterval(interval);
			}
			const particleCount = 50 * (timeLeft / duration);
			confetti(
				Object.assign({}, defaults, {
					particleCount,
					origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
				})
			);
			confetti(
				Object.assign({}, defaults, {
					particleCount,
					origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
				})
			);
		}, 250);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
