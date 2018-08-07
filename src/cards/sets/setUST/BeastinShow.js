"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BeastinShow extends UnimplementedCard {
  constructor (game) {
    super(game, "Beast in Show", "Unstable", "UST");
  }
}

module.exports = BeastinShow;
