"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DakmorBat extends UnimplementedCard {
  constructor(game) {
    super(game, "Dakmor Bat", "Portal Second Age", "PO2");
  }
}

module.exports = DakmorBat;
