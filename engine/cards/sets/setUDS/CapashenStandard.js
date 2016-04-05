"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CapashenStandard extends UnimplementedCard {
  constructor(game) {
    super(game, "Capashen Standard", "Urza's Destiny", "UDS");
  }
}

module.exports = CapashenStandard;
