"use strict";
const Constants = require ("../../../Constants");
const GodlessShrineBase = require("../setGTC/GodlessShrine");

class GodlessShrine extends GodlessShrineBase {
  constructor(game) {
    super(game, "Godless Shrine", "Zendikar Expedition", "EXP");
  }
}

module.exports = GodlessShrine;
