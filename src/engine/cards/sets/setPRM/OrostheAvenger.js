"use strict";
const Constants = require ("../../../Constants");
const OrostheAvengerBase = require("../setCMA/OrostheAvenger");

class OrostheAvenger extends OrostheAvengerBase {
  constructor (game) {
    super(game, "Oros, the Avenger", "Magic Online Promos", "PRM");
  }
}

module.exports = OrostheAvenger;
