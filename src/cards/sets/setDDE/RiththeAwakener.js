"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiththeAwakener extends UnimplementedCard {
  constructor(game) {
    super(game, "Rith, the Awakener", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = RiththeAwakener;
