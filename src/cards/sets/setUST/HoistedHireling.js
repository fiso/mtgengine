"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HoistedHireling extends UnimplementedCard {
  constructor (game) {
    super(game, "Hoisted Hireling", "Unstable", "UST");
  }
}

module.exports = HoistedHireling;
