"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SvyeluniteTempleBase = require("../setBTD/SvyeluniteTemple.js");

class SvyeluniteTemple extends SvyeluniteTempleBase {
  constructor(game) {
    super(game, "Svyelunite Temple", "Fifth Edition", "5ED");
  }
}

module.exports = SvyeluniteTemple;
