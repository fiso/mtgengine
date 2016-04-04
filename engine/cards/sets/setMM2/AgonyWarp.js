"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AgonyWarpBase = require("../setARC/AgonyWarp.js");

class AgonyWarp extends AgonyWarpBase {
  constructor(game) {
    super(game, "Agony Warp", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = AgonyWarp;
