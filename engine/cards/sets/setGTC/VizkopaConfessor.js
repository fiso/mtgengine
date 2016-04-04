"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VizkopaConfessor extends UnimplementedCard {
  constructor(game) {
    super(game, "Vizkopa Confessor", "Gatecrash", "GTC");
  }
}

module.exports = VizkopaConfessor;
