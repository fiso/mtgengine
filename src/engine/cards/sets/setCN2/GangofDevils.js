"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GangofDevils extends UnimplementedCard {
  constructor (game) {
    super(game, "Gang of Devils", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = GangofDevils;
