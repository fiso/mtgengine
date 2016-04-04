"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CryptGhast extends Card {
  constructor(game) {
    super(game, "Crypt Ghast", "Commander 2014", "C14");
  }
}

module.exports = CryptGhast;
