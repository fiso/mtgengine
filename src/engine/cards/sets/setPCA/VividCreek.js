"use strict";
const Constants = require ("../../../Constants");
const VividCreekBase = require("../setC17/VividCreek");

class VividCreek extends VividCreekBase {
  constructor (game) {
    super(game, "Vivid Creek", "Planechase Anthology", "PCA");
  }
}

module.exports = VividCreek;
