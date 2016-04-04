"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DarkImpostor extends Card {
  constructor(game) {
    super(game, "Dark Impostor", "Avacyn Restored", "AVR");
  }
}

module.exports = DarkImpostor;
