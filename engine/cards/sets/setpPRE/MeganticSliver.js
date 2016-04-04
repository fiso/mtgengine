"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MeganticSliverBase = require("../setM14/MeganticSliver.js");

class MeganticSliver extends MeganticSliverBase {
  constructor(game) {
    super(game, "Megantic Sliver", "Prerelease Events", "pPRE");
  }
}

module.exports = MeganticSliver;
