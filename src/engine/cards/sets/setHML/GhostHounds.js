"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhostHounds extends UnimplementedCard {
  constructor (game) {
    super(game, "Ghost Hounds", "Homelands", "HML");
  }
}

module.exports = GhostHounds;
