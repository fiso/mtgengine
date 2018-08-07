"use strict";
const Constants = require ("../../../Constants");
const PolyraptorBase = require("../setPRIX/Polyraptor");

class Polyraptor extends PolyraptorBase {
  constructor (game) {
    super(game, "Polyraptor", "Rivals of Ixalan", "RIX");
  }
}

module.exports = Polyraptor;
