"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GreaterStoneSpirit extends UnimplementedCard {
  constructor(game) {
    super(game, "Greater Stone Spirit", "Coldsnap", "CSP");
  }
}

module.exports = GreaterStoneSpirit;
