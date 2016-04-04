"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PathtoExileBase = require("../setARC/PathtoExile.js");

class PathtoExile extends PathtoExileBase {
  constructor(game) {
    super(game, "Path to Exile", "Modern Event Deck 2014", "MD1");
  }
}

module.exports = PathtoExile;
