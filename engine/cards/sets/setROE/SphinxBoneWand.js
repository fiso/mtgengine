"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SphinxBoneWandBase = require("../setDDJ/SphinxBoneWand.js");

class SphinxBoneWand extends SphinxBoneWandBase {
  constructor(game) {
    super(game, "Sphinx-Bone Wand", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = SphinxBoneWand;
