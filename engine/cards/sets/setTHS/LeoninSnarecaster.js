"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LeoninSnarecasterBase = require("../setDDN/LeoninSnarecaster.js");

class LeoninSnarecaster extends LeoninSnarecasterBase {
  constructor(game) {
    super(game, "Leonin Snarecaster", "Theros", "THS");
  }
}

module.exports = LeoninSnarecaster;
