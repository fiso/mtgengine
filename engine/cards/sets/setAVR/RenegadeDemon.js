"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RenegadeDemon extends Card {
  constructor(game) {
    super(game, "Renegade Demon", "Avacyn Restored", "AVR");
  }
}

module.exports = RenegadeDemon;
