"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CarnageAltar extends Card {
  constructor(game) {
    super(game, "Carnage Altar", "Commander 2013 Edition", "C13");
  }
}

module.exports = CarnageAltar;
