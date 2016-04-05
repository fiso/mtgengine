"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BogWreckage extends UnimplementedCard {
  constructor(game) {
    super(game, "Bog Wreckage", "Odyssey", "ODY");
  }
}

module.exports = BogWreckage;
