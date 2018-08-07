"use strict";
const Constants = require ("../../../Constants");
const LilianaVessBase = require("../setGVL/LilianaVess");

class LilianaVess extends LilianaVessBase {
  constructor (game) {
    super(game, "Liliana Vess", "Magic 2011", "M11");
  }
}

module.exports = LilianaVess;
