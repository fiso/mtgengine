"use strict";
const Constants = require ("../../../Constants");
const AstrolabeBase = require("../setALL/Astrolabe");

class Astrolabe extends AstrolabeBase {
  constructor(game) {
    super(game, "Astrolabe", "Masters Edition III", "ME3");
  }
}

module.exports = Astrolabe;
