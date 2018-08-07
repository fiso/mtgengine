"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DamiaSageofStone extends UnimplementedCard {
  constructor (game) {
    super(game, "Damia, Sage of Stone", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = DamiaSageofStone;
