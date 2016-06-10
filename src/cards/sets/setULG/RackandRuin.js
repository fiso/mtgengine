"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RackandRuin extends UnimplementedCard {
  constructor (game) {
    super(game, "Rack and Ruin", "Urza's Legacy", "ULG");
  }
}

module.exports = RackandRuin;
