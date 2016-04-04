"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PainMagnification extends Card {
  constructor(game) {
    super(game, "Pain Magnification", "Dissension", "DIS");
  }
}

module.exports = PainMagnification;
