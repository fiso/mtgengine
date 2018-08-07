"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TolarianScholar extends UnimplementedCard {
  constructor (game) {
    super(game, "Tolarian Scholar", "Core Set 2019", "M19");
  }
}

module.exports = TolarianScholar;
