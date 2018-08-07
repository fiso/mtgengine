"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ClashofWills extends UnimplementedCard {
  constructor (game) {
    super(game, "Clash of Wills", "Friday Night Magic 2016", "F16");
  }
}

module.exports = ClashofWills;
