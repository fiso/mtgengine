"use strict";
const Constants = require ("../../../Constants");
const SvyeluniteTempleBase = require("../setME2/SvyeluniteTemple");

class SvyeluniteTemple extends SvyeluniteTempleBase {
  constructor (game) {
    super(game, "Svyelunite Temple", "Classic Sixth Edition", "6ED");
  }
}

module.exports = SvyeluniteTemple;
