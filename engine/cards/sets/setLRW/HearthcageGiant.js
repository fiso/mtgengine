"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HearthcageGiant extends Card {
  constructor(game) {
    super(game, "Hearthcage Giant", "Lorwyn", "LRW");
  }
}

module.exports = HearthcageGiant;
