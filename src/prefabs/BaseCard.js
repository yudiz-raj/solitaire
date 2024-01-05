
// You can write more code here

/* START OF COMPILED CODE */

class BaseCard extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// card_base
		const card_base = scene.add.image(0, 0, "card_base-2");
		card_base.scaleX = 1.6;
		card_base.scaleY = 1.6;
		this.add(card_base);

		// logo_black
		const logo_black = scene.add.image(0, 0, "logo-black");
		logo_black.scaleX = 0.2;
		logo_black.scaleY = 0.2;
		logo_black.visible = false;
		this.add(logo_black);

		// winCard
		const winCard = scene.add.image(0, 0, "spade_1");
		winCard.scaleX = 0.45;
		winCard.scaleY = 0.45;
		winCard.visible = false;
		this.add(winCard);

		this.card_base = card_base;
		this.winCard = winCard;

		/* START-USER-CTR-CODE */
		// Write your code here.
		// this.card_base.setInteractive().on('pointerover', (a, b, c, d) => {
		// 	console.log(a);
		// })
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	card_base;
	/** @type {Phaser.GameObjects.Image} */
	winCard;

	/* START-USER-CODE */

	// Write your code here.
	setWinCard = () => this.winCard.setVisible(true);

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
