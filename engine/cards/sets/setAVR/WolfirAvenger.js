"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WolfirAvenger extends Card {
  constructor(game) {
    super(game, "Wolfir Avenger", "Avacyn Restored", "AVR");
  }
}

module.exports = WolfirAvenger;
