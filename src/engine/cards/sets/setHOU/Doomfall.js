"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Doomfall extends UnimplementedCard {
  constructor (game) {
    super(game, "Doomfall", "Hour of Devastation", "HOU");
  }
}

module.exports = Doomfall;
