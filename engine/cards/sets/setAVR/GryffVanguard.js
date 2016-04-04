"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GryffVanguard extends Card {
  constructor(game) {
    super(game, "Gryff Vanguard", "Avacyn Restored", "AVR");
  }
}

module.exports = GryffVanguard;
