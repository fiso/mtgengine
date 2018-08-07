"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnragedRevolutionary extends UnimplementedCard {
  constructor (game) {
    super(game, "Enraged Revolutionary", "Conspiracy", "CNS");
  }
}

module.exports = EnragedRevolutionary;
