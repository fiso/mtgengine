"use strict";
const Constants = require ("../../../Constants");
const ElvishArchdruidBase = require("../setDDU/ElvishArchdruid");

class ElvishArchdruid extends ElvishArchdruidBase {
  constructor (game) {
    super(game, "Elvish Archdruid", "Magic 2013", "M13");
  }
}

module.exports = ElvishArchdruid;
