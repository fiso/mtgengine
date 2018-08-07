"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Relearn extends UnimplementedCard {
  constructor (game) {
    super(game, "Relearn", "Starter 1999", "S99");
  }
}

module.exports = Relearn;
