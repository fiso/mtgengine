"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Ulcerate extends Card {
  constructor(game) {
    super(game, "Ulcerate", "Magic 2015 Core Set", "M15");
  }
}

module.exports = Ulcerate;
