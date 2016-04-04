"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StampedingSerow extends Card {
  constructor(game) {
    super(game, "Stampeding Serow", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = StampedingSerow;
