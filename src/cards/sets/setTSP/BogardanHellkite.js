"use strict";
const Constants = require ("../../../Constants");
const BogardanHellkiteBase = require("../setC14/BogardanHellkite");

class BogardanHellkite extends BogardanHellkiteBase {
  constructor (game) {
    super(game, "Bogardan Hellkite", "Time Spiral", "TSP");
  }
}

module.exports = BogardanHellkite;
