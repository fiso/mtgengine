"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChimericEgg extends UnimplementedCard {
  constructor (game) {
    super(game, "Chimeric Egg", "Darksteel", "DST");
  }
}

module.exports = ChimericEgg;
