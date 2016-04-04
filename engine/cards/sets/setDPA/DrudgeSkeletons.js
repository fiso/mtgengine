"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DrudgeSkeletonsBase = require("../set6ED/DrudgeSkeletons.js");

class DrudgeSkeletons extends DrudgeSkeletonsBase {
  constructor(game) {
    super(game, "Drudge Skeletons", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = DrudgeSkeletons;
