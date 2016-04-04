"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MistformShrieker extends UnimplementedCard {
  constructor(game) {
    super(game, "Mistform Shrieker", "Onslaught", "ONS");
  }
}

module.exports = MistformShrieker;
