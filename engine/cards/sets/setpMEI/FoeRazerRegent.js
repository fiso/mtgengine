"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FoeRazerRegentBase = require("../setDTK/FoeRazerRegent.js");

class FoeRazerRegent extends FoeRazerRegentBase {
  constructor(game) {
    super(game, "Foe-Razer Regent", "Media Inserts", "pMEI");
  }
}

module.exports = FoeRazerRegent;
