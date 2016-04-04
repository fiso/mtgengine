"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpiderSpawningBase = require("../setC15/SpiderSpawning.js");

class SpiderSpawning extends SpiderSpawningBase {
  constructor(game) {
    super(game, "Spider Spawning", "Innistrad", "ISD");
  }
}

module.exports = SpiderSpawning;
