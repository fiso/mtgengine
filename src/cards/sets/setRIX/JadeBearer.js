"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JadeBearer extends UnimplementedCard {
  constructor (game) {
    super(game, "Jade Bearer", "Rivals of Ixalan", "RIX");
  }
}

module.exports = JadeBearer;
