"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Enlarge extends Card {
  constructor(game) {
    super(game, "Enlarge", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Enlarge;
