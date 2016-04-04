"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TidehollowScullerBase = require("../setpFNM/TidehollowSculler.js");

class TidehollowSculler extends TidehollowScullerBase {
  constructor(game) {
    super(game, "Tidehollow Sculler", "Modern Masters", "MMA");
  }
}

module.exports = TidehollowSculler;
