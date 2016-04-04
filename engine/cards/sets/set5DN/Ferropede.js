"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Ferropede extends Card {
  constructor(game) {
    super(game, "Ferropede", "Fifth Dawn", "5DN");
  }
}

module.exports = Ferropede;
