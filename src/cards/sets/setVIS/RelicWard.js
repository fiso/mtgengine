"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RelicWard extends UnimplementedCard {
  constructor(game) {
    super(game, "Relic Ward", "Visions", "VIS");
  }
}

module.exports = RelicWard;
