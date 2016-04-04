"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LustforWar extends Card {
  constructor(game) {
    super(game, "Lust for War", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = LustforWar;
