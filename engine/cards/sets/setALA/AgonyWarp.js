"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AgonyWarpBase = require("../setARC/AgonyWarp.js");

class AgonyWarp extends AgonyWarpBase {
  constructor(game) {
    super(game, "Agony Warp", "Shards of Alara", "ALA");
  }
}

module.exports = AgonyWarp;
