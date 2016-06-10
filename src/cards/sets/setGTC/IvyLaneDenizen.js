"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IvyLaneDenizen extends UnimplementedCard {
  constructor (game) {
    super(game, "Ivy Lane Denizen", "Gatecrash", "GTC");
  }
}

module.exports = IvyLaneDenizen;
