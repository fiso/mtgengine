"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Paroxysm extends Card {
  constructor(game) {
    super(game, "Paroxysm", "Exodus", "EXO");
  }
}

module.exports = Paroxysm;
