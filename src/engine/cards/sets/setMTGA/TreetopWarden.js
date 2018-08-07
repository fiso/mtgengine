"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TreetopWarden extends UnimplementedCard {
  constructor (game) {
    super(game, "Treetop Warden", "MTG Arena New Player Experience", "MTGA");
  }
}

module.exports = TreetopWarden;
