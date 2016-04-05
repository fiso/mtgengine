"use strict";
const Constants = require ("../../../Constants");
const SlateofAncestryBase = require("../setDD3_EVG/SlateofAncestry");

class SlateofAncestry extends SlateofAncestryBase {
  constructor(game) {
    super(game, "Slate of Ancestry", "Onslaught", "ONS");
  }
}

module.exports = SlateofAncestry;
