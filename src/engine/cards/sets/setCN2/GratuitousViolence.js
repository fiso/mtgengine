"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GratuitousViolence extends UnimplementedCard {
  constructor (game) {
    super(game, "Gratuitous Violence", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = GratuitousViolence;
