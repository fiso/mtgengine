"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StrawSoldiers extends UnimplementedCard {
  constructor(game) {
    super(game, "Straw Soldiers", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = StrawSoldiers;
