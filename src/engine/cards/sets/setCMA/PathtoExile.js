"use strict";
const Constants = require ("../../../Constants");
const PathtoExileBase = require("../setE02/PathtoExile");

class PathtoExile extends PathtoExileBase {
  constructor (game) {
    super(game, "Path to Exile", "Commander Anthology", "CMA");
  }
}

module.exports = PathtoExile;
