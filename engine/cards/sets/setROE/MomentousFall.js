"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MomentousFall extends Card {
  constructor(game) {
    super(game, "Momentous Fall", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = MomentousFall;
