"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PristineTalisman extends Card {
  constructor(game) {
    super(game, "Pristine Talisman", "Commander 2013 Edition", "C13");
  }
}

module.exports = PristineTalisman;
