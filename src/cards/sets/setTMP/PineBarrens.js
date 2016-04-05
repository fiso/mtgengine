"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PineBarrens extends UnimplementedCard {
  constructor(game) {
    super(game, "Pine Barrens", "Tempest", "TMP");
  }
}

module.exports = PineBarrens;
