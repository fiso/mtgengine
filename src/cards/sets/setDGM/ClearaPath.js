"use strict";
const Constants = require ("../../../Constants");
const ClearaPathBase = require("../setM15/ClearaPath");

class ClearaPath extends ClearaPathBase {
  constructor (game) {
    super(game, "Clear a Path", "Dragon's Maze", "DGM");
  }
}

module.exports = ClearaPath;
