"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JasmineSeer extends UnimplementedCard {
  constructor(game) {
    super(game, "Jasmine Seer", "Urza's Destiny", "UDS");
  }
}

module.exports = JasmineSeer;
