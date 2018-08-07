"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sandblast extends UnimplementedCard {
  constructor (game) {
    super(game, "Sandblast", "Hour of Devastation", "HOU");
  }
}

module.exports = Sandblast;
