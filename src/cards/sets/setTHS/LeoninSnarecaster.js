"use strict";
const Constants = require ("../../../Constants");
const LeoninSnarecasterBase = require("../setDDN/LeoninSnarecaster");

class LeoninSnarecaster extends LeoninSnarecasterBase {
  constructor(game) {
    super(game, "Leonin Snarecaster", "Theros", "THS");
  }
}

module.exports = LeoninSnarecaster;
