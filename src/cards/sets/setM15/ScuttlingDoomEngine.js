"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScuttlingDoomEngine extends UnimplementedCard {
  constructor (game) {
    super(game, "Scuttling Doom Engine", "Magic 2015 Core Set", "M15");
  }
}

module.exports = ScuttlingDoomEngine;
