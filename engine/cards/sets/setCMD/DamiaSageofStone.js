"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DamiaSageofStone extends Card {
  constructor(game) {
    super(game, "Damia, Sage of Stone", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = DamiaSageofStone;
