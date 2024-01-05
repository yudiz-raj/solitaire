
// You can write more code here

/* START OF COMPILED CODE */

class Logo extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? -2, y ?? 0);

		// container_cards
		const container_cards = scene.add.container(0, 0);
		this.add(container_cards);

		// club_11
		const club_11 = scene.add.image(-128, 66, "club_11");
		club_11.scaleX = 0.45;
		club_11.scaleY = 0.45;
		club_11.angle = -16;
		container_cards.add(club_11);

		// heart_6
		const heart_6 = scene.add.image(-69, 45, "heart_6");
		heart_6.scaleX = 0.37;
		heart_6.scaleY = 0.37;
		container_cards.add(heart_6);

		// spade_1
		const spade_1 = scene.add.image(7, 71, "spade_1");
		spade_1.scaleX = 0.37;
		spade_1.scaleY = 0.37;
		spade_1.angle = 10;
		container_cards.add(spade_1);

		// diamond_13
		const diamond_13 = scene.add.image(96, 92, "diamond_13");
		diamond_13.scaleX = 0.37;
		diamond_13.scaleY = 0.37;
		diamond_13.angle = 17;
		container_cards.add(diamond_13);

		// saga_logo
		const saga_logo = scene.add.image(1, 101, "saga-logo");
		this.add(saga_logo);

		this.container_cards = container_cards;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Container} */
	container_cards;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
