"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FoolsDemise extends Card {
  constructor(game) {
    super(game, "Fool's Demise", "Commander 2014", "C14");
  }
}

module.exports = FoolsDemise;
