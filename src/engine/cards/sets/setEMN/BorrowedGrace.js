"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BorrowedGrace extends UnimplementedCard {
  constructor (game) {
    super(game, "Borrowed Grace", "Eldritch Moon", "EMN");
  }
}

module.exports = BorrowedGrace;
