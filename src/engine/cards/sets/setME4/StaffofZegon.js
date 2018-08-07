"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StaffofZegon extends UnimplementedCard {
  constructor (game) {
    super(game, "Staff of Zegon", "Masters Edition IV", "ME4");
  }
}

module.exports = StaffofZegon;
