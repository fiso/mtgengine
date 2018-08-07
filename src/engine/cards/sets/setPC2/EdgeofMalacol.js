"use strict";
const Constants = require ("../../../Constants");
const EdgeofMalacolBase = require("../setPCA/EdgeofMalacol");

class EdgeofMalacol extends EdgeofMalacolBase {
  constructor (game) {
    super(game, "Edge of Malacol", "Planechase 2012", "PC2");
  }
}

module.exports = EdgeofMalacol;
