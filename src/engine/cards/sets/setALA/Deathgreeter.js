"use strict";
const Constants = require ("../../../Constants");
const DeathgreeterBase = require("../setGVL/Deathgreeter");

class Deathgreeter extends DeathgreeterBase {
  constructor (game) {
    super(game, "Deathgreeter", "Shards of Alara", "ALA");
  }
}

module.exports = Deathgreeter;
