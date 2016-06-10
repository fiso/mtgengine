"use strict";
const Constants = require ("../../../Constants");
const FoeRazerRegentBase = require("../setDTK/FoeRazerRegent");

class FoeRazerRegent extends FoeRazerRegentBase {
  constructor (game) {
    super(game, "Foe-Razer Regent", "Media Inserts", "pMEI");
  }
}

module.exports = FoeRazerRegent;
