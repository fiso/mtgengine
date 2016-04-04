"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HammerfistGiant extends Card {
  constructor(game) {
    super(game, "Hammerfist Giant", "Commander 2015", "C15");
  }
}

module.exports = HammerfistGiant;
