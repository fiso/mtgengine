"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PredatorySliver extends UnimplementedCard {
  constructor(game) {
    super(game, "Predatory Sliver", "Magic 2014 Core Set", "M14");
  }
}

module.exports = PredatorySliver;
