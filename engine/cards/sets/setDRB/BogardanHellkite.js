"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BogardanHellkiteBase = require("../setC14/BogardanHellkite.js");

class BogardanHellkite extends BogardanHellkiteBase {
  constructor(game) {
    super(game, "Bogardan Hellkite", "From the Vault: Dragons", "DRB");
  }
}

module.exports = BogardanHellkite;
