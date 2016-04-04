"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StoneGiant extends Card {
  constructor(game) {
    super(game, "Stone Giant", "Collector's Edition", "CED");
  }
}

module.exports = StoneGiant;
