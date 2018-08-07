"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrislySurvivor extends UnimplementedCard {
  constructor (game) {
    super(game, "Grisly Survivor", "Hour of Devastation", "HOU");
  }
}

module.exports = GrislySurvivor;
