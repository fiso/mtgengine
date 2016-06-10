"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FaithfulSquire extends UnimplementedCard {
  constructor (game) {
    super(game, "Faithful Squire", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = FaithfulSquire;
