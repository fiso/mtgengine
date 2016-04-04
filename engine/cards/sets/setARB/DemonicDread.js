"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DemonicDread extends Card {
  constructor(game) {
    super(game, "Demonic Dread", "Alara Reborn", "ARB");
  }
}

module.exports = DemonicDread;
