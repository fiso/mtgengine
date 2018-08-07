"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DesertoftheTrue extends UnimplementedCard {
  constructor (game) {
    super(game, "Desert of the True", "Hour of Devastation", "HOU");
  }
}

module.exports = DesertoftheTrue;
