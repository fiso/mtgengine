"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GarruktheVeilCursed extends UnimplementedCard {
  constructor(game) {
    super(game, "Garruk, the Veil-Cursed", "Innistrad", "ISD");
  }
}

module.exports = GarruktheVeilCursed;
