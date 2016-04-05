"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HellkiteOverlord extends UnimplementedCard {
  constructor(game) {
    super(game, "Hellkite Overlord", "From the Vault: Dragons", "DRB");
  }
}

module.exports = HellkiteOverlord;
