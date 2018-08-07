"use strict";
const Constants = require ("../../../Constants");
const FoeRazerRegentBase = require("../setPTKDF/FoeRazerRegent");

class FoeRazerRegent extends FoeRazerRegentBase {
  constructor (game) {
    super(game, "Foe-Razer Regent", "Dragons of Tarkir Promos", "PDTK");
  }
}

module.exports = FoeRazerRegent;
