"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SigilBlessingBase = require("../setDDG/SigilBlessing.js");

class SigilBlessing extends SigilBlessingBase {
  constructor(game) {
    super(game, "Sigil Blessing", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = SigilBlessing;
