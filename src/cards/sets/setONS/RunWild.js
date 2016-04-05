"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RunWild extends UnimplementedCard {
  constructor(game) {
    super(game, "Run Wild", "Onslaught", "ONS");
  }
}

module.exports = RunWild;
