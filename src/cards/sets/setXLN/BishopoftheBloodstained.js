"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BishopoftheBloodstained extends UnimplementedCard {
  constructor (game) {
    super(game, "Bishop of the Bloodstained", "Ixalan", "XLN");
  }
}

module.exports = BishopoftheBloodstained;
