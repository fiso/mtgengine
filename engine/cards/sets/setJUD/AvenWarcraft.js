"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AvenWarcraft extends Card {
  constructor(game) {
    super(game, "Aven Warcraft", "Judgment", "JUD");
  }
}

module.exports = AvenWarcraft;
