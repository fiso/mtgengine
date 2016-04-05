"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DamiaSageofStone extends UnimplementedCard {
  constructor(game) {
    super(game, "Damia, Sage of Stone", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = DamiaSageofStone;
