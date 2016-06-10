"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HelmofAwakening extends UnimplementedCard {
  constructor (game) {
    super(game, "Helm of Awakening", "Visions", "VIS");
  }
}

module.exports = HelmofAwakening;
