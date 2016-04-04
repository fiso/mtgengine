"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AngelsTomb extends Card {
  constructor(game) {
    super(game, "Angel's Tomb", "Avacyn Restored", "AVR");
  }
}

module.exports = AngelsTomb;
