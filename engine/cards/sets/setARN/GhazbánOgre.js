"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhazbánOgre extends UnimplementedCard {
  constructor(game) {
    super(game, "Ghazbán Ogre", "Arabian Nights", "ARN");
  }
}

module.exports = GhazbánOgre;
