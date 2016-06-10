"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VodalianMage extends UnimplementedCard {
  constructor (game) {
    super(game, "Vodalian Mage", "Fallen Empires", "FEM");
  }
}

module.exports = VodalianMage;
