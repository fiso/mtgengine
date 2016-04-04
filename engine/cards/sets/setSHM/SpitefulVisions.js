"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpitefulVisionsBase = require("../setC13/SpitefulVisions.js");

class SpitefulVisions extends SpitefulVisionsBase {
  constructor(game) {
    super(game, "Spiteful Visions", "Shadowmoor", "SHM");
  }
}

module.exports = SpitefulVisions;
