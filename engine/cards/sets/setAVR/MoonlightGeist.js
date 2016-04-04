"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoonlightGeist extends Card {
  constructor(game) {
    super(game, "Moonlight Geist", "Avacyn Restored", "AVR");
  }
}

module.exports = MoonlightGeist;
