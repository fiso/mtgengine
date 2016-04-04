"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Vanquish extends Card {
  constructor(game) {
    super(game, "Vanquish", "Fifth Dawn", "5DN");
  }
}

module.exports = Vanquish;
