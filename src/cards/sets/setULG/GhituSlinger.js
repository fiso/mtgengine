"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhituSlinger extends UnimplementedCard {
  constructor (game) {
    super(game, "Ghitu Slinger", "Urza's Legacy", "ULG");
  }
}

module.exports = GhituSlinger;
