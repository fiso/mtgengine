"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DwarvenLieutenant extends UnimplementedCard {
  constructor(game) {
    super(game, "Dwarven Lieutenant", "Fallen Empires", "FEM");
  }
}

module.exports = DwarvenLieutenant;
