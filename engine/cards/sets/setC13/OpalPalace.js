"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OpalPalace extends Card {
  constructor(game) {
    super(game, "Opal Palace", "Commander 2013 Edition", "C13");
  }
}

module.exports = OpalPalace;
