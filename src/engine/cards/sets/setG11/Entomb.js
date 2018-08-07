"use strict";
const Constants = require ("../../../Constants");
const EntombBase = require("../setMP2/Entomb");

class Entomb extends EntombBase {
  constructor (game) {
    super(game, "Entomb", "Judge Gift Cards 2011", "G11");
  }
}

module.exports = Entomb;
