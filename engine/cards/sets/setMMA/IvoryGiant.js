"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IvoryGiant extends Card {
  constructor(game) {
    super(game, "Ivory Giant", "Modern Masters", "MMA");
  }
}

module.exports = IvoryGiant;
