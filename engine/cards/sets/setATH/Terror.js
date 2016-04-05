"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Terror extends UnimplementedCard {
  constructor(game) {
    super(game, "Terror", "Anthologies", "ATH");
  }
}

module.exports = Terror;
