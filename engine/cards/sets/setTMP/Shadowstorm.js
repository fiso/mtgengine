"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Shadowstorm extends Card {
  constructor(game) {
    super(game, "Shadowstorm", "Tempest", "TMP");
  }
}

module.exports = Shadowstorm;
