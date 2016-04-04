"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TalruumMinotaurBase = require("../setBTD/TalruumMinotaur.js");

class TalruumMinotaur extends TalruumMinotaurBase {
  constructor(game) {
    super(game, "Talruum Minotaur", "Classic Sixth Edition", "6ED");
  }
}

module.exports = TalruumMinotaur;
