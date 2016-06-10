"use strict";
const Constants = require ("../../../Constants");
const MayorofAvabruckBase = require("../setISD/MayorofAvabruck");

class MayorofAvabruck extends MayorofAvabruckBase {
  constructor (game) {
    super(game, "Mayor of Avabruck", "Prerelease Events", "pPRE");
  }
}

module.exports = MayorofAvabruck;
