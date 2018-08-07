"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LilianasDefeat extends UnimplementedCard {
  constructor (game) {
    super(game, "Liliana's Defeat", "Hour of Devastation", "HOU");
  }
}

module.exports = LilianasDefeat;
