"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ReitoLantern extends Card {
  constructor(game) {
    super(game, "Reito Lantern", "Champions of Kamigawa", "CHK");
  }
}

module.exports = ReitoLantern;
