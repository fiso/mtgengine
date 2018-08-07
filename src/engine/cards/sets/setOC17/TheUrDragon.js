"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheUrDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "The Ur-Dragon", "Commander 2017 Oversized", "OC17");
  }
}

module.exports = TheUrDragon;
