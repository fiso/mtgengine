"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarReport extends UnimplementedCard {
  constructor(game) {
    super(game, "War Report", "New Phyrexia", "NPH");
  }
}

module.exports = WarReport;
