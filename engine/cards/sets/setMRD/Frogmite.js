"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FrogmiteBase = require("../setDDF/Frogmite.js");

class Frogmite extends FrogmiteBase {
  constructor(game) {
    super(game, "Frogmite", "Mirrodin", "MRD");
  }
}

module.exports = Frogmite;
