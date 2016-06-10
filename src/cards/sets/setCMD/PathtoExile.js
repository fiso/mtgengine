"use strict";
const Constants = require ("../../../Constants");
const PathtoExileBase = require("../setARC/PathtoExile");

class PathtoExile extends PathtoExileBase {
  constructor (game) {
    super(game, "Path to Exile", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = PathtoExile;
