"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GodlessShrineBase = require("../setGTC/GodlessShrine.js");

class GodlessShrine extends GodlessShrineBase {
  constructor(game) {
    super(game, "Godless Shrine", "Guildpact", "GPT");
  }
}

module.exports = GodlessShrine;
