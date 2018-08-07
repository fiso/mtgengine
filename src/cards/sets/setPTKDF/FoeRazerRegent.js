"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FoeRazerRegent extends UnimplementedCard {
  constructor (game) {
    super(game, "Foe-Razer Regent", "Tarkir Dragonfury", "PTKDF");
  }
}

module.exports = FoeRazerRegent;
