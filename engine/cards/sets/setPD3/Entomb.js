"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EntombBase = require("../setpJGP/Entomb.js");

class Entomb extends EntombBase {
  constructor(game) {
    super(game, "Entomb", "Premium Deck Series: Graveborn", "PD3");
  }
}

module.exports = Entomb;
