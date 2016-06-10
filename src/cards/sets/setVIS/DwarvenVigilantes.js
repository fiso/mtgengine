"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DwarvenVigilantes extends UnimplementedCard {
  constructor (game) {
    super(game, "Dwarven Vigilantes", "Visions", "VIS");
  }
}

module.exports = DwarvenVigilantes;
