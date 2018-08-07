"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrinningDemon extends UnimplementedCard {
  constructor (game) {
    super(game, "Grinning Demon", "Onslaught", "ONS");
  }
}

module.exports = GrinningDemon;
