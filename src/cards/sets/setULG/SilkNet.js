"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SilkNet extends UnimplementedCard {
  constructor (game) {
    super(game, "Silk Net", "Urza's Legacy", "ULG");
  }
}

module.exports = SilkNet;
