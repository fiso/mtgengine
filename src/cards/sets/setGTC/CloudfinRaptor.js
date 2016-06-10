"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CloudfinRaptor extends UnimplementedCard {
  constructor (game) {
    super(game, "Cloudfin Raptor", "Gatecrash", "GTC");
  }
}

module.exports = CloudfinRaptor;
