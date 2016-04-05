"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NullChampion extends UnimplementedCard {
  constructor(game) {
    super(game, "Null Champion", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = NullChampion;
