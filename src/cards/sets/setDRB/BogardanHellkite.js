"use strict";
const Constants = require ("../../../Constants");
const BogardanHellkiteBase = require("../setC14/BogardanHellkite");

class BogardanHellkite extends BogardanHellkiteBase {
  constructor (game) {
    super(game, "Bogardan Hellkite", "From the Vault: Dragons", "DRB");
  }
}

module.exports = BogardanHellkite;
