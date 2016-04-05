"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChangelingTitan extends UnimplementedCard {
  constructor(game) {
    super(game, "Changeling Titan", "Lorwyn", "LRW");
  }
}

module.exports = ChangelingTitan;
