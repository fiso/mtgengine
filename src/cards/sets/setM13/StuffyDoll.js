"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StuffyDoll extends UnimplementedCard {
  constructor (game) {
    super(game, "Stuffy Doll", "Magic 2013", "M13");
  }
}

module.exports = StuffyDoll;
