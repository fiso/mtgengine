"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GhazbánOgre extends Card {
  constructor(game) {
    super(game, "Ghazbán Ogre", "Arabian Nights", "ARN");
  }
}

module.exports = GhazbánOgre;
