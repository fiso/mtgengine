"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SearingFlesh extends UnimplementedCard {
  constructor (game) {
    super(game, "Searing Flesh", "Onslaught", "ONS");
  }
}

module.exports = SearingFlesh;
