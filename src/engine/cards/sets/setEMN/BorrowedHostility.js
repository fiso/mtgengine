"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BorrowedHostility extends UnimplementedCard {
  constructor (game) {
    super(game, "Borrowed Hostility", "Eldritch Moon", "EMN");
  }
}

module.exports = BorrowedHostility;
