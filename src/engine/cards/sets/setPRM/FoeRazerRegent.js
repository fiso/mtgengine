"use strict";
const Constants = require ("../../../Constants");
const FoeRazerRegentBase = require("../setPTKDF/FoeRazerRegent");

class FoeRazerRegent extends FoeRazerRegentBase {
  constructor (game) {
    super(game, "Foe-Razer Regent", "Magic Online Promos", "PRM");
  }
}

module.exports = FoeRazerRegent;
