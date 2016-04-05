"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarshHulk extends UnimplementedCard {
  constructor(game) {
    super(game, "Marsh Hulk", "Dragons of Tarkir", "DTK");
  }
}

module.exports = MarshHulk;
