"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrazenBuccaneers extends UnimplementedCard {
  constructor (game) {
    super(game, "Brazen Buccaneers", "Ixalan", "XLN");
  }
}

module.exports = BrazenBuccaneers;
