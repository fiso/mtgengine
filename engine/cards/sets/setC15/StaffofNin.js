"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StaffofNin extends UnimplementedCard {
  constructor(game) {
    super(game, "Staff of Nin", "Commander 2015", "C15");
  }
}

module.exports = StaffofNin;
