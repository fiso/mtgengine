"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StaffoftheAges extends UnimplementedCard {
  constructor (game) {
    super(game, "Staff of the Ages", "Ice Age", "ICE");
  }
}

module.exports = StaffoftheAges;
