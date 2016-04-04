"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DrudgeSkeletonsBase = require("../set6ED/DrudgeSkeletons.js");

class DrudgeSkeletons extends DrudgeSkeletonsBase {
  constructor(game) {
    super(game, "Drudge Skeletons", "Collector's Edition", "CED");
  }
}

module.exports = DrudgeSkeletons;
