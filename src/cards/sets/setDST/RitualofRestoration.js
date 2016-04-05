"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RitualofRestoration extends UnimplementedCard {
  constructor(game) {
    super(game, "Ritual of Restoration", "Darksteel", "DST");
  }
}

module.exports = RitualofRestoration;
