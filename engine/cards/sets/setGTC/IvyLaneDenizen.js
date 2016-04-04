"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IvyLaneDenizen extends Card {
  constructor(game) {
    super(game, "Ivy Lane Denizen", "Gatecrash", "GTC");
  }
}

module.exports = IvyLaneDenizen;
