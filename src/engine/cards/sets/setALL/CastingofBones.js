"use strict";
const Constants = require ("../../../Constants");
const CastingofBonesBase = require("../setCST/CastingofBones");

class CastingofBones extends CastingofBonesBase {
  constructor (game) {
    super(game, "Casting of Bones", "Alliances", "ALL");
  }
}

module.exports = CastingofBones;
