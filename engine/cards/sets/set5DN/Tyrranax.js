"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Tyrranax extends Card {
  constructor(game) {
    super(game, "Tyrranax", "Fifth Dawn", "5DN");
  }
}

module.exports = Tyrranax;
