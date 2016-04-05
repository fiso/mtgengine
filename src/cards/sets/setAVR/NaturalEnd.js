"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NaturalEnd extends UnimplementedCard {
  constructor(game) {
    super(game, "Natural End", "Avacyn Restored", "AVR");
  }
}

module.exports = NaturalEnd;
