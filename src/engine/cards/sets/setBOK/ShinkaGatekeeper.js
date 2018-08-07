"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShinkaGatekeeper extends UnimplementedCard {
  constructor (game) {
    super(game, "Shinka Gatekeeper", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = ShinkaGatekeeper;
