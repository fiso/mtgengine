"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Necrobite extends Card {
  constructor(game) {
    super(game, "Necrobite", "Avacyn Restored", "AVR");
  }
}

module.exports = Necrobite;
