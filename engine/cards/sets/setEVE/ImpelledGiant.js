"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ImpelledGiant extends Card {
  constructor(game) {
    super(game, "Impelled Giant", "Eventide", "EVE");
  }
}

module.exports = ImpelledGiant;
