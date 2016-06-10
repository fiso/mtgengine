"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hurricane extends UnimplementedCard {
  constructor (game) {
    super(game, "Hurricane", "Anthologies", "ATH");
  }
}

module.exports = Hurricane;
