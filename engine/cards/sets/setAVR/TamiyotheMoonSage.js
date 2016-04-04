"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TamiyotheMoonSage extends Card {
  constructor(game) {
    super(game, "Tamiyo, the Moon Sage", "Avacyn Restored", "AVR");
  }
}

module.exports = TamiyotheMoonSage;
