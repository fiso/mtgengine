"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StaffofNin extends UnimplementedCard {
  constructor (game) {
    super(game, "Staff of Nin", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = StaffofNin;
