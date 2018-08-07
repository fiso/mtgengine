"use strict";
const Constants = require ("../../../Constants");
const ObeliskofAlaraBase = require("../setCON/ObeliskofAlara");

class ObeliskofAlara extends ObeliskofAlaraBase {
  constructor (game) {
    super(game, "Obelisk of Alara", "Launch Parties", "PLPA");
  }
}

module.exports = ObeliskofAlara;
