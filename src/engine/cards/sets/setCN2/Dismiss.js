"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dismiss extends UnimplementedCard {
  constructor (game) {
    super(game, "Dismiss", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = Dismiss;
