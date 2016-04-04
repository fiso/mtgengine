"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShelteringWord extends Card {
  constructor(game) {
    super(game, "Sheltering Word", "Avacyn Restored", "AVR");
  }
}

module.exports = ShelteringWord;
