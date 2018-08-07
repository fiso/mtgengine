"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChartaCourse extends UnimplementedCard {
  constructor (game) {
    super(game, "Chart a Course", "Ixalan", "XLN");
  }
}

module.exports = ChartaCourse;
