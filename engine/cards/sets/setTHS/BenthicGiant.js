"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BenthicGiant extends Card {
  constructor(game) {
    super(game, "Benthic Giant", "Theros", "THS");
  }
}

module.exports = BenthicGiant;
