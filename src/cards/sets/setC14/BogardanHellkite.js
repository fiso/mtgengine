"use strict";
const Constants = require ("../../../Constants");
const BogardanHellkiteBase = require("../setCM2/BogardanHellkite");

class BogardanHellkite extends BogardanHellkiteBase {
  constructor (game) {
    super(game, "Bogardan Hellkite", "Commander 2014", "C14");
  }
}

module.exports = BogardanHellkite;
