"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HellkiteTyrant extends UnimplementedCard {
  constructor(game) {
    super(game, "Hellkite Tyrant", "Gatecrash", "GTC");
  }
}

module.exports = HellkiteTyrant;
