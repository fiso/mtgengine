"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HelmofObedience extends UnimplementedCard {
  constructor (game) {
    super(game, "Helm of Obedience", "Alliances", "ALL");
  }
}

module.exports = HelmofObedience;
