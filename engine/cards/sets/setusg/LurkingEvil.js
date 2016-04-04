"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LurkingEvil extends Card {
  constructor(game) {
    super(game, "Lurking Evil", "Urza's Saga", "USG");
  }
}

module.exports = LurkingEvil;
