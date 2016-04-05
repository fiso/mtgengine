"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Squire extends UnimplementedCard {
  constructor(game) {
    super(game, "Squire", "The Dark", "DRK");
  }
}

module.exports = Squire;
