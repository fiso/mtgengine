"use strict";
const Constants = require ("../../../Constants");
const SvyeluniteTempleBase = require("../setBTD/SvyeluniteTemple");

class SvyeluniteTemple extends SvyeluniteTempleBase {
  constructor (game) {
    super(game, "Svyelunite Temple", "Fifth Edition", "5ED");
  }
}

module.exports = SvyeluniteTemple;
