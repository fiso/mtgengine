"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SylvanRanger extends Card {
  constructor(game) {
    super(game, "Sylvan Ranger", "Commander 2014", "C14");
  }
}

module.exports = SylvanRanger;
