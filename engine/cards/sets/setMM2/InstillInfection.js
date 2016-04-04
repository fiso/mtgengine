"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InstillInfection extends Card {
  constructor(game) {
    super(game, "Instill Infection", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = InstillInfection;
