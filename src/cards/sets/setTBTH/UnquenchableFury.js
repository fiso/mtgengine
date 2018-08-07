"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnquenchableFury extends UnimplementedCard {
  constructor (game) {
    super(game, "Unquenchable Fury", "Battle the Horde", "TBTH");
  }
}

module.exports = UnquenchableFury;
