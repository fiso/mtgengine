"use strict";
const Constants = require ("../../../Constants");
const ObeliskofAlaraBase = require("../setCON/ObeliskofAlara");

class ObeliskofAlara extends ObeliskofAlaraBase {
  constructor (game) {
    super(game, "Obelisk of Alara", "Magic Online Promos", "PRM");
  }
}

module.exports = ObeliskofAlara;
