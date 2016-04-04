"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MordantDragonBase = require("../setDDG/MordantDragon.js");

class MordantDragon extends MordantDragonBase {
  constructor(game) {
    super(game, "Mordant Dragon", "Worldwake", "WWK");
  }
}

module.exports = MordantDragon;
