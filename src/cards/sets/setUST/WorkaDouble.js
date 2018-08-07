"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WorkaDouble extends UnimplementedCard {
  constructor (game) {
    super(game, "Work a Double", "Unstable", "UST");
  }
}

module.exports = WorkaDouble;
