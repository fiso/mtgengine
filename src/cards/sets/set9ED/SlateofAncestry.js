"use strict";
const Constants = require ("../../../Constants");
const SlateofAncestryBase = require("../setEVG/SlateofAncestry");

class SlateofAncestry extends SlateofAncestryBase {
  constructor (game) {
    super(game, "Slate of Ancestry", "Ninth Edition", "9ED");
  }
}

module.exports = SlateofAncestry;
