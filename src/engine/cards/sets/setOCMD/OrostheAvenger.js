"use strict";
const Constants = require ("../../../Constants");
const OrostheAvengerBase = require("../setCMA/OrostheAvenger");

class OrostheAvenger extends OrostheAvengerBase {
  constructor (game) {
    super(game, "Oros, the Avenger", "Commander 2011 Oversized", "OCMD");
  }
}

module.exports = OrostheAvenger;
