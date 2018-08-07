"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LuXunScholarGeneral extends UnimplementedCard {
  constructor (game) {
    super(game, "Lu Xun, Scholar General", "Commander Anthology", "CMA");
  }
}

module.exports = LuXunScholarGeneral;
