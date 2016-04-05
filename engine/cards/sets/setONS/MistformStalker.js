"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MistformStalker extends UnimplementedCard {
  constructor(game) {
    super(game, "Mistform Stalker", "Onslaught", "ONS");
  }
}

module.exports = MistformStalker;
