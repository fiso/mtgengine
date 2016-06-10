"use strict";
const Constants = require ("../../../Constants");
const EntombBase = require("../setpJGP/Entomb");

class Entomb extends EntombBase {
  constructor (game) {
    super(game, "Entomb", "Odyssey", "ODY");
  }
}

module.exports = Entomb;
