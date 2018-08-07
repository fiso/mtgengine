"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScroungerofSouls extends UnimplementedCard {
  constructor (game) {
    super(game, "Scrounger of Souls", "Hour of Devastation", "HOU");
  }
}

module.exports = ScroungerofSouls;
