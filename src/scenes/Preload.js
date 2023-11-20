
// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// progress
		const progress = this.add.text(960, 640, "", {});
		progress.setOrigin(0.5, 0.5);
		progress.text = "0%";
		progress.setStyle({ "fontSize": "100px" });

		// splash_screen_bg
		this.add.image(960, 540, "splash-screen-bg-1");

		// container_cards
		const container_cards = this.add.container(0, 0);

		// diamond_1
		const diamond_1 = this.add.image(996, 626, "diamond_1");
		diamond_1.scaleX = 0.63;
		diamond_1.scaleY = 0.63;
		diamond_1.angle = -138;
		container_cards.add(diamond_1);

		// heart_11
		const heart_11 = this.add.image(1001, 617, "heart_11");
		heart_11.scaleX = 0.63;
		heart_11.scaleY = 0.63;
		heart_11.angle = -42;
		container_cards.add(heart_11);

		// spade_7
		const spade_7 = this.add.image(888, 623, "spade_7");
		spade_7.scaleX = 0.63;
		spade_7.scaleY = 0.63;
		spade_7.angle = 42;
		container_cards.add(spade_7);

		// heart_6
		const heart_6 = this.add.image(977, 616, "heart_6");
		heart_6.scaleX = 0.63;
		heart_6.scaleY = 0.63;
		heart_6.angle = 45;
		container_cards.add(heart_6);

		// heart
		const heart = this.add.image(967, 621, "heart_6");
		heart.scaleX = 0.63;
		heart.scaleY = 0.63;
		heart.angle = -31;
		container_cards.add(heart);

		// spade_13
		const spade_13 = this.add.image(951, 625, "spade_13");
		spade_13.scaleX = 0.63;
		spade_13.scaleY = 0.63;
		spade_13.angle = 140;
		container_cards.add(spade_13);

		// loading
		this.add.image(960, 916, "loading");

		// innerBar
		const innerBar = this.add.image(607, 906, "innerBar");
		innerBar.setOrigin(0, 0.5);
		innerBar.visible = false;

		// logo
		const logo = new Logo(this, 960, 540);
		this.add.existing(logo);

		// progress (components)
		new PreloadText(progress);

		this.container_cards = container_cards;
		this.innerBar = innerBar;
		this.logo = logo;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	container_cards;
	/** @type {Phaser.GameObjects.Image} */
	innerBar;
	/** @type {Logo} */
	logo;

	/* START-USER-CODE */

	// Write your code here
	logoAnimation = () => {
		const aBGCardsPosition = [
			{ x: 1821, y: 44 },
			{ x: 1851, y: 1026 },
			{ x: 266, y: 1065 },
			{ x: 69, y: 1028 },
			{ x: 287, y: 12 },
			{ x: 131, y: 66 },
		]
		const aLogoCardsPosition = [
			{ x: -187, y: -140 },
			{ x: -69, y: -185 },
			{ x: 52, y: -188 },
			{ x: 174, y: -161 },
		]
		for (let i = 0; i < this.container_cards.list.length; i++) {
			this.tweens.add({
				targets: this.container_cards.list[i],
				x: aBGCardsPosition[i].x,
				y: aBGCardsPosition[i].y,
				ease: "power4",
				duration: 700,
				delay: 100 + (i * 150),
			})
		}
		for (let i = 0; i < this.logo.container_cards.list.length; i++) {
			this.tweens.add({
				targets: this.logo.container_cards.list[i],
				x: aLogoCardsPosition[i].x,
				y: aLogoCardsPosition[i].y,
				ease: "power4",
				duration: 700,
				delay: 100 + (i * 200),
			})
		}
	}
	preload() {

		this.editorCreate();

		this.editorPreload();
		this.logoAnimation();
		this.isGameLoaded1 = false;
		this.isGameLoaded2 = false;
		this.load.on(Phaser.Loader.Events.COMPLETE, (p) => {
			this.isGameLoaded1 = true;
		});

		this.innerBarWidth = this.innerBar.displayWidth;

		this.maskGraphics = this.make.graphics();
		this.maskGraphics.fillStyle(0xffffff);
		this.maskGraphics.fillRect(
			this.innerBar.x,
			this.innerBar.y - this.innerBar.displayHeight / 2,
			this.innerBar.displayWidth,
			this.innerBar.displayHeight
		);

		this.innerBar.setMask(this.maskGraphics.createGeometryMask());

		const loadingDuration = 3000;
		const intervalDuration = 30;
		const numIntervals = loadingDuration / intervalDuration;
		let currentInterval = 0;
		const progressIncrement = 1 / numIntervals;

		const updateProgressBar = () => {
			this.innerBar.setVisible(true);
			const currentProgress = currentInterval * progressIncrement;
			this.maskGraphics.clear();
			this.maskGraphics.fillStyle(0xffffff);
			this.maskGraphics.fillRect(
				this.innerBar.x,
				this.innerBar.y - this.innerBar.displayHeight / 2,
				this.innerBarWidth * currentProgress,
				this.innerBar.displayHeight
			);
			currentInterval++;
			if (currentProgress >= 1.07) {
				clearInterval(progressInterval);
				this.isGameLoaded2 = true;
			}
		};
		const progressInterval = setInterval(updateProgressBar, intervalDuration);
	}

	update() {
		if (this.isGameLoaded1 && this.isGameLoaded2) {
			this.scene.stop("Preload");
			this.scene.start("Solitaire");
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
