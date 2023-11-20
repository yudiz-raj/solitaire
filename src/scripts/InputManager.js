class InputManager {
    constructor(oScene) {
        this.oScene = oScene;
    }
    buttonClick(button) {
        button.on("pointerover", () => {
            this.oScene.input.setDefaultCursor("pointer");
            button.setScale(1.05, 1.05);
        });
        button.on("pointerout", () => {
            this.oScene.input.setDefaultCursor("default");
            button.setScale(1, 1);
        });
        button.setInteractive().on("pointerdown", () => {
            clearInterval(this.oScene.nGameInteraval);
            this.oScene.tweens.add({
                targets: this.oScene.btn_play_again,
                scale: 0.8,
                ease: 'bounce',
                duration: 100,
                onComplete: () => {
                    this.oScene.scene.restart();
                }
            })
        });
    }
}