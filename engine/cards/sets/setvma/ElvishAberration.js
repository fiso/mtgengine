"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElvishAberrationBase = require("../setpARL/ElvishAberration.js");

class ElvishAberration extends ElvishAberrationBase {
  constructor(game) {
    super(game, "Elvish Aberration", "Vintage Masters", "VMA");
  }
}

module.exports = ElvishAberration;
