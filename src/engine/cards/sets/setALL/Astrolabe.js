"use strict";
const Constants = require ("../../../Constants");
const AstrolabeBase = require("../setME3/Astrolabe");

class Astrolabe extends AstrolabeBase {
  constructor (game) {
    super(game, "Astrolabe", "Alliances", "ALL");
  }
}

module.exports = Astrolabe;
