"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvenBrigadier extends UnimplementedCard {
  constructor(game) {
    super(game, "Aven Brigadier", "Onslaught", "ONS");
  }
}

module.exports = AvenBrigadier;
