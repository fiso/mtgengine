"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KoskunKeep extends UnimplementedCard {
  constructor(game) {
    super(game, "Koskun Keep", "Homelands", "HML");
  }
}

module.exports = KoskunKeep;
