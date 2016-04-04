"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhostTown extends UnimplementedCard {
  constructor(game) {
    super(game, "Ghost Town", "Tempest", "TMP");
  }
}

module.exports = GhostTown;
