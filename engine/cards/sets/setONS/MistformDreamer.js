"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MistformDreamer extends UnimplementedCard {
  constructor(game) {
    super(game, "Mistform Dreamer", "Onslaught", "ONS");
  }
}

module.exports = MistformDreamer;
