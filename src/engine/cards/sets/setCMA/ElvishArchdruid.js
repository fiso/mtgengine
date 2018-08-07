"use strict";
const Constants = require ("../../../Constants");
const ElvishArchdruidBase = require("../setDDU/ElvishArchdruid");

class ElvishArchdruid extends ElvishArchdruidBase {
  constructor (game) {
    super(game, "Elvish Archdruid", "Commander Anthology", "CMA");
  }
}

module.exports = ElvishArchdruid;
