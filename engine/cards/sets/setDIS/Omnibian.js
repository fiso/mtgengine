"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Omnibian extends UnimplementedCard {
  constructor(game) {
    super(game, "Omnibian", "Dissension", "DIS");
  }
}

module.exports = Omnibian;
