class GameManager {
	constructor(oScene) {
		this.aSpiderSolitaireCards = [
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
		];
		this.aSolitaireCards = [
			"spade_1", "spade_2", "spade_3", "spade_4", "spade_5", "spade_6", "spade_7", "spade_8", "spade_9", "spade_10", "spade_11", "spade_12", "spade_13",
			"club_1", "club_2", "club_3", "club_4", "club_5", "club_6", "club_7", "club_8", "club_9", "club_10", "club_11", "club_12", "club_13",
			"heart_1", "heart_2", "heart_3", "heart_4", "heart_5", "heart_6", "heart_7", "heart_8", "heart_9", "heart_10", "heart_11", "heart_12", "heart_13",
			"diamond_1", "diamond_2", "diamond_3", "diamond_4", "diamond_5", "diamond_6", "diamond_7", "diamond_8", "diamond_9", "diamond_10", "diamond_11", "diamond_12", "diamond_13",
		];
	}
	getRandomCard = (array) => {
		const index = Math.round(Math.random() * array.length - 1);
		const arr = array.splice(index, 1)
		return arr[0];
	}
	getFirstCard = (array) => array.shift();
}