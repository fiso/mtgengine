"use strict";
const Constants = require ("../../../Constants");
const ElvishArchdruidBase = require("../setDDU/ElvishArchdruid");

class ElvishArchdruid extends ElvishArchdruidBase {
  constructor (game) {
    super(game, "Elvish Archdruid", "Magic 2010", "M10");
  }
}

module.exports = ElvishArchdruid;
