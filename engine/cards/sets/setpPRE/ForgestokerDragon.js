"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ForgestokerDragonBase = require("../setBNG/ForgestokerDragon.js");

class ForgestokerDragon extends ForgestokerDragonBase {
  constructor(game) {
    super(game, "Forgestoker Dragon", "Prerelease Events", "pPRE");
  }
}

module.exports = ForgestokerDragon;
