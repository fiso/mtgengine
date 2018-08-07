"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ImpetuousProtege extends UnimplementedCard {
  constructor (game) {
    super(game, "Impetuous Protege", "Battlebond Promos", "PBBD");
  }
}

module.exports = ImpetuousProtege;
