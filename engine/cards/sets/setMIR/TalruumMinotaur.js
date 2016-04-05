"use strict";
const Constants = require ("../../../Constants");
const TalruumMinotaurBase = require("../setBTD/TalruumMinotaur");

class TalruumMinotaur extends TalruumMinotaurBase {
  constructor(game) {
    super(game, "Talruum Minotaur", "Mirage", "MIR");
  }
}

module.exports = TalruumMinotaur;
