"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MorbidBloom extends UnimplementedCard {
  constructor(game) {
    super(game, "Morbid Bloom", "Alara Reborn", "ARB");
  }
}

module.exports = MorbidBloom;
