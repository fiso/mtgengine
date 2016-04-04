"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SvyeluniteTempleBase = require("../setBTD/SvyeluniteTemple.js");

class SvyeluniteTemple extends SvyeluniteTempleBase {
  constructor(game) {
    super(game, "Svyelunite Temple", "Masters Edition II", "ME2");
  }
}

module.exports = SvyeluniteTemple;
