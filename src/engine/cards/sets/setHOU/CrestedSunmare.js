"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrestedSunmare extends UnimplementedCard {
  constructor (game) {
    super(game, "Crested Sunmare", "Hour of Devastation", "HOU");
  }
}

module.exports = CrestedSunmare;
