"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EvernightShade extends Card {
  constructor(game) {
    super(game, "Evernight Shade", "Avacyn Restored", "AVR");
  }
}

module.exports = EvernightShade;
