"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrutalSuppression extends UnimplementedCard {
  constructor(game) {
    super(game, "Brutal Suppression", "Prophecy", "PCY");
  }
}

module.exports = BrutalSuppression;
