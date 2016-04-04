"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CracklingDoom extends Card {
  constructor(game) {
    super(game, "Crackling Doom", "Khans of Tarkir", "KTK");
  }
}

module.exports = CracklingDoom;
