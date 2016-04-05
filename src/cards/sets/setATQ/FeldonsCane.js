"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FeldonsCane extends UnimplementedCard {
  constructor(game) {
    super(game, "Feldon's Cane", "Antiquities", "ATQ");
  }
}

module.exports = FeldonsCane;
