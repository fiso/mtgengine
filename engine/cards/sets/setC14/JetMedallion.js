"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JetMedallion extends Card {
  constructor(game) {
    super(game, "Jet Medallion", "Commander 2014", "C14");
  }
}

module.exports = JetMedallion;
