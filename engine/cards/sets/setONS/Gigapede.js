"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gigapede extends UnimplementedCard {
  constructor(game) {
    super(game, "Gigapede", "Onslaught", "ONS");
  }
}

module.exports = Gigapede;
