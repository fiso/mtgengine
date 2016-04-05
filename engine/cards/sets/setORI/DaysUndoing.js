"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DaysUndoing extends UnimplementedCard {
  constructor(game) {
    super(game, "Day's Undoing", "Magic Origins", "ORI");
  }
}

module.exports = DaysUndoing;
