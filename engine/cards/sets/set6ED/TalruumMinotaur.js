"use strict";
const Constants = require ("../../../Constants");
const TalruumMinotaurBase = require("../setBTD/TalruumMinotaur");

class TalruumMinotaur extends TalruumMinotaurBase {
  constructor(game) {
    super(game, "Talruum Minotaur", "Classic Sixth Edition", "6ED");
  }
}

module.exports = TalruumMinotaur;
