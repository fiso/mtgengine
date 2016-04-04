"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SylvanScryingBase = require("../setBFZ/SylvanScrying.js");

class SylvanScrying extends SylvanScryingBase {
  constructor(game) {
    super(game, "Sylvan Scrying", "Tenth Edition", "10E");
  }
}

module.exports = SylvanScrying;
