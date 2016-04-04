"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AngelsMercy extends Card {
  constructor(game) {
    super(game, "Angel's Mercy", "Avacyn Restored", "AVR");
  }
}

module.exports = AngelsMercy;
