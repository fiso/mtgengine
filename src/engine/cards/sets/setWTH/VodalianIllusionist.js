"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VodalianIllusionist extends UnimplementedCard {
  constructor (game) {
    super(game, "Vodalian Illusionist", "Weatherlight", "WTH");
  }
}

module.exports = VodalianIllusionist;
