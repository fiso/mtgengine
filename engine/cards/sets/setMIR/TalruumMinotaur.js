"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TalruumMinotaurBase = require("../setBTD/TalruumMinotaur.js");

class TalruumMinotaur extends TalruumMinotaurBase {
  constructor(game) {
    super(game, "Talruum Minotaur", "Mirage", "MIR");
  }
}

module.exports = TalruumMinotaur;
