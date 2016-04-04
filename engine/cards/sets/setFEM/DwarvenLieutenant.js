"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DwarvenLieutenant extends Card {
  constructor(game) {
    super(game, "Dwarven Lieutenant", "Fallen Empires", "FEM");
  }
}

module.exports = DwarvenLieutenant;
