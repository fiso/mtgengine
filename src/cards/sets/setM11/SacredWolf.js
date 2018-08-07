"use strict";
const Constants = require ("../../../Constants");
const SacredWolfBase = require("../setM12/SacredWolf");

class SacredWolf extends SacredWolfBase {
  constructor (game) {
    super(game, "Sacred Wolf", "Magic 2011", "M11");
  }
}

module.exports = SacredWolf;
