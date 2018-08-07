"use strict";
const Constants = require ("../../../Constants");
const ReleasetheGremlinsBase = require("../setAER/ReleasetheGremlins");

class ReleasetheGremlins extends ReleasetheGremlinsBase {
  constructor (game) {
    super(game, "Release the Gremlins", "Aether Revolt Promos", "PAER");
  }
}

module.exports = ReleasetheGremlins;
