"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NoQuarter extends UnimplementedCard {
  constructor(game) {
    super(game, "No Quarter", "Tempest", "TMP");
  }
}

module.exports = NoQuarter;
