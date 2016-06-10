"use strict";
const Constants = require ("../../../Constants");
const OrostheAvengerBase = require("../setCMD/OrostheAvenger");

class OrostheAvenger extends OrostheAvengerBase {
  constructor (game) {
    super(game, "Oros, the Avenger", "Prerelease Events", "pPRE");
  }
}

module.exports = OrostheAvenger;
