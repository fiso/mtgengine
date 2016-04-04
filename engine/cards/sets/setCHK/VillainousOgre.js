"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VillainousOgre extends Card {
  constructor(game) {
    super(game, "Villainous Ogre", "Champions of Kamigawa", "CHK");
  }
}

module.exports = VillainousOgre;
