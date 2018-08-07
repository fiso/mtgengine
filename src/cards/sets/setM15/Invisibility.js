"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Invisibility extends UnimplementedCard {
  constructor (game) {
    super(game, "Invisibility", "Magic 2015", "M15");
  }
}

module.exports = Invisibility;
