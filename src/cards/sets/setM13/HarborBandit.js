"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HarborBandit extends UnimplementedCard {
  constructor(game) {
    super(game, "Harbor Bandit", "Magic 2013", "M13");
  }
}

module.exports = HarborBandit;
