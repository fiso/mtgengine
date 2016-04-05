"use strict";
const Constants = require ("../../../Constants");
const AgonyWarpBase = require("../setARC/AgonyWarp");

class AgonyWarp extends AgonyWarpBase {
  constructor(game) {
    super(game, "Agony Warp", "Shards of Alara", "ALA");
  }
}

module.exports = AgonyWarp;
