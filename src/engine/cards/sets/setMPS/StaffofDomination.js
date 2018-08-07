"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StaffofDomination extends UnimplementedCard {
  constructor (game) {
    super(game, "Staff of Domination", "Kaladesh Inventions", "MPS");
  }
}

module.exports = StaffofDomination;
