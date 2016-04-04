"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkOffering extends UnimplementedCard {
  constructor(game) {
    super(game, "Dark Offering", "Portal Second Age", "PO2");
  }
}

module.exports = DarkOffering;
