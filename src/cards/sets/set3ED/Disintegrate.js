"use strict";
const Constants = require ("../../../Constants");
const DisintegrateBase = require("../setCED/Disintegrate");

class Disintegrate extends DisintegrateBase {
  constructor (game) {
    super(game, "Disintegrate", "Revised Edition", "3ED");
  }
}

module.exports = Disintegrate;
