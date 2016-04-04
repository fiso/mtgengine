"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IonStorm extends Card {
  constructor(game) {
    super(game, "Ion Storm", "Fifth Dawn", "5DN");
  }
}

module.exports = IonStorm;
