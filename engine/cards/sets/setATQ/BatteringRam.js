"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BatteringRam extends UnimplementedCard {
  constructor(game) {
    super(game, "Battering Ram", "Antiquities", "ATQ");
  }
}

module.exports = BatteringRam;
