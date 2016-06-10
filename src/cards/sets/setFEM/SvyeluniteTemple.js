"use strict";
const Constants = require ("../../../Constants");
const SvyeluniteTempleBase = require("../setBTD/SvyeluniteTemple");

class SvyeluniteTemple extends SvyeluniteTempleBase {
  constructor (game) {
    super(game, "Svyelunite Temple", "Fallen Empires", "FEM");
  }
}

module.exports = SvyeluniteTemple;
