"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VillainousOgre extends UnimplementedCard {
  constructor (game) {
    super(game, "Villainous Ogre", "Champions of Kamigawa", "CHK");
  }
}

module.exports = VillainousOgre;
