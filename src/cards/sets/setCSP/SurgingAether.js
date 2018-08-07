"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SurgingAether extends UnimplementedCard {
  constructor (game) {
    super(game, "Surging Aether", "Coldsnap", "CSP");
  }
}

module.exports = SurgingAether;
