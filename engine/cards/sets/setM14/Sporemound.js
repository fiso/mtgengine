"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Sporemound extends Card {
  constructor(game) {
    super(game, "Sporemound", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Sporemound;
