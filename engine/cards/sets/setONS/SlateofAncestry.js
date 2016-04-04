"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SlateofAncestryBase = require("../setDD3_EVG/SlateofAncestry.js");

class SlateofAncestry extends SlateofAncestryBase {
  constructor(game) {
    super(game, "Slate of Ancestry", "Onslaught", "ONS");
  }
}

module.exports = SlateofAncestry;
