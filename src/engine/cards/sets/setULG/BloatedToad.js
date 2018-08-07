"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloatedToad extends UnimplementedCard {
  constructor (game) {
    super(game, "Bloated Toad", "Urza's Legacy", "ULG");
  }
}

module.exports = BloatedToad;
