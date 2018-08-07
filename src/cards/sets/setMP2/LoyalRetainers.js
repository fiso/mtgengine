"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoyalRetainers extends UnimplementedCard {
  constructor (game) {
    super(game, "Loyal Retainers", "Amonkhet Invocations", "MP2");
  }
}

module.exports = LoyalRetainers;
