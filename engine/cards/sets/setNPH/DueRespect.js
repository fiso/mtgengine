"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DueRespect extends UnimplementedCard {
  constructor(game) {
    super(game, "Due Respect", "New Phyrexia", "NPH");
  }
}

module.exports = DueRespect;
