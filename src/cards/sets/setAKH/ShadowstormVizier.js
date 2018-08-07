"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShadowstormVizier extends UnimplementedCard {
  constructor (game) {
    super(game, "Shadowstorm Vizier", "Amonkhet", "AKH");
  }
}

module.exports = ShadowstormVizier;
