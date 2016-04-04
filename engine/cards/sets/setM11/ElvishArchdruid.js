"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElvishArchdruidBase = require("../setC14/ElvishArchdruid.js");

class ElvishArchdruid extends ElvishArchdruidBase {
  constructor(game) {
    super(game, "Elvish Archdruid", "Magic 2011", "M11");
  }
}

module.exports = ElvishArchdruid;
