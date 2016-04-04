"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MysticRemora extends Card {
  constructor(game) {
    super(game, "Mystic Remora", "Ice Age", "ICE");
  }
}

module.exports = MysticRemora;
