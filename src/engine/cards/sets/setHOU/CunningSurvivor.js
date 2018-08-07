"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CunningSurvivor extends UnimplementedCard {
  constructor (game) {
    super(game, "Cunning Survivor", "Hour of Devastation", "HOU");
  }
}

module.exports = CunningSurvivor;
