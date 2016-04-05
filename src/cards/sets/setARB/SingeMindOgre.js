"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SingeMindOgre extends UnimplementedCard {
  constructor(game) {
    super(game, "Singe-Mind Ogre", "Alara Reborn", "ARB");
  }
}

module.exports = SingeMindOgre;
