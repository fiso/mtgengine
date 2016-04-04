"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GruulCharm extends UnimplementedCard {
  constructor(game) {
    super(game, "Gruul Charm", "Gatecrash", "GTC");
  }
}

module.exports = GruulCharm;
