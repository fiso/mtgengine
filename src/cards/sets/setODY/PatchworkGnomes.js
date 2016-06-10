"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PatchworkGnomes extends UnimplementedCard {
  constructor (game) {
    super(game, "Patchwork Gnomes", "Odyssey", "ODY");
  }
}

module.exports = PatchworkGnomes;
