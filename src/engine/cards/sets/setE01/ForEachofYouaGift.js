"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForEachofYouaGift extends UnimplementedCard {
  constructor (game) {
    super(game, "For Each of You, a Gift", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = ForEachofYouaGift;
