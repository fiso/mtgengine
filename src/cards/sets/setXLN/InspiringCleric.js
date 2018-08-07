"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InspiringCleric extends UnimplementedCard {
  constructor (game) {
    super(game, "Inspiring Cleric", "Ixalan", "XLN");
  }
}

module.exports = InspiringCleric;
