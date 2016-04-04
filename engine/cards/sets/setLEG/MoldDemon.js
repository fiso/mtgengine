"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoldDemon extends Card {
  constructor(game) {
    super(game, "Mold Demon", "Legends", "LEG");
  }
}

module.exports = MoldDemon;
