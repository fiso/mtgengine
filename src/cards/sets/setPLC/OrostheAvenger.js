"use strict";
const Constants = require ("../../../Constants");
const OrostheAvengerBase = require("../setCMA/OrostheAvenger");

class OrostheAvenger extends OrostheAvengerBase {
  constructor (game) {
    super(game, "Oros, the Avenger", "Planar Chaos", "PLC");
  }
}

module.exports = OrostheAvenger;
