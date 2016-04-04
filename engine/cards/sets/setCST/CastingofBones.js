"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CastingofBonesBase = require("../setALL/CastingofBones.js");

class CastingofBones extends CastingofBonesBase {
  constructor(game) {
    super(game, "Casting of Bones", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = CastingofBones;
