"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BorrowedMalevolence extends UnimplementedCard {
  constructor (game) {
    super(game, "Borrowed Malevolence", "Eldritch Moon", "EMN");
  }
}

module.exports = BorrowedMalevolence;
