"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GratuitousViolence extends UnimplementedCard {
  constructor (game) {
    super(game, "Gratuitous Violence", "Onslaught", "ONS");
  }
}

module.exports = GratuitousViolence;
