"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TreetopScout extends UnimplementedCard {
  constructor (game) {
    super(game, "Treetop Scout", "Scourge", "SCG");
  }
}

module.exports = TreetopScout;
