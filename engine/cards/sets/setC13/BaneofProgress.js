"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BaneofProgress extends Card {
  constructor(game) {
    super(game, "Bane of Progress", "Commander 2013 Edition", "C13");
  }
}

module.exports = BaneofProgress;
