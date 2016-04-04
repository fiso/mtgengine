"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FaithfulSquire extends Card {
  constructor(game) {
    super(game, "Faithful Squire", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = FaithfulSquire;
