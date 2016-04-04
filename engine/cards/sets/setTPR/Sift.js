"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SiftBase = require("../set9ED/Sift.js");

class Sift extends SiftBase {
  constructor(game) {
    super(game, "Sift", "Tempest Remastered", "TPR");
  }
}

module.exports = Sift;
