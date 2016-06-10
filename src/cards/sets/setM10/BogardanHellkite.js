"use strict";
const Constants = require ("../../../Constants");
const BogardanHellkiteBase = require("../setC14/BogardanHellkite");

class BogardanHellkite extends BogardanHellkiteBase {
  constructor (game) {
    super(game, "Bogardan Hellkite", "Magic 2010", "M10");
  }
}

module.exports = BogardanHellkite;
