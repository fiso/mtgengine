"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DwarvenBlastminer extends UnimplementedCard {
  constructor (game) {
    super(game, "Dwarven Blastminer", "Onslaught", "ONS");
  }
}

module.exports = DwarvenBlastminer;
