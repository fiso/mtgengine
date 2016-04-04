"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NumbingDose extends Card {
  constructor(game) {
    super(game, "Numbing Dose", "New Phyrexia", "NPH");
  }
}

module.exports = NumbingDose;
