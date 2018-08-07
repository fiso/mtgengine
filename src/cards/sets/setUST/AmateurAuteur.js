"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AmateurAuteur extends UnimplementedCard {
  constructor (game) {
    super(game, "Amateur Auteur", "Unstable", "UST");
  }
}

module.exports = AmateurAuteur;
