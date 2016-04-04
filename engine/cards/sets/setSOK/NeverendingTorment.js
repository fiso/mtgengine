"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NeverendingTorment extends UnimplementedCard {
  constructor(game) {
    super(game, "Neverending Torment", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = NeverendingTorment;
