"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WizardsLightning extends UnimplementedCard {
  constructor (game) {
    super(game, "Wizard's Lightning", "Dominaria", "DOM");
  }
}

module.exports = WizardsLightning;
