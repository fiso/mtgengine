"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FellShepherd extends Card {
  constructor(game) {
    super(game, "Fell Shepherd", "Commander 2013 Edition", "C13");
  }
}

module.exports = FellShepherd;
