"use strict";
const Constants = require ("../../../Constants");
const SphinxBoneWandBase = require("../setDDJ/SphinxBoneWand");

class SphinxBoneWand extends SphinxBoneWandBase {
  constructor (game) {
    super(game, "Sphinx-Bone Wand", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = SphinxBoneWand;
