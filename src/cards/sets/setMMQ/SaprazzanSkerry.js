"use strict";
const Constants = require ("../../../Constants");
const SaprazzanSkerryBase = require("../setWC00/SaprazzanSkerry");

class SaprazzanSkerry extends SaprazzanSkerryBase {
  constructor (game) {
    super(game, "Saprazzan Skerry", "Mercadian Masques", "MMQ");
  }
}

module.exports = SaprazzanSkerry;
