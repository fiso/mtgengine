"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DesertSandstorm extends Card {
  constructor(game) {
    super(game, "Desert Sandstorm", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = DesertSandstorm;
