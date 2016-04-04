"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RattleclawMysticBase = require("../setKTK/RattleclawMystic.js");

class RattleclawMystic extends RattleclawMysticBase {
  constructor(game) {
    super(game, "Rattleclaw Mystic", "Prerelease Events", "pPRE");
  }
}

module.exports = RattleclawMystic;
