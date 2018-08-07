"use strict";
const Constants = require ("../../../Constants");
const AuramancerBase = require("../setA25/Auramancer");

class Auramancer extends AuramancerBase {
  constructor (game) {
    super(game, "Auramancer", "Planechase Anthology", "PCA");
  }
}

module.exports = Auramancer;
