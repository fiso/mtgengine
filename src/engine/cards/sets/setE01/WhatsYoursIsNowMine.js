"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WhatsYoursIsNowMine extends UnimplementedCard {
  constructor (game) {
    super(game, "What's Yours Is Now Mine", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = WhatsYoursIsNowMine;
