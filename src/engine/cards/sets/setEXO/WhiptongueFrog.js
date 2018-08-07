"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WhiptongueFrog extends UnimplementedCard {
  constructor (game) {
    super(game, "Whiptongue Frog", "Exodus", "EXO");
  }
}

module.exports = WhiptongueFrog;
