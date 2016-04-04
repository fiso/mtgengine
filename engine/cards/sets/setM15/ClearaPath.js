"use strict";
const Constants = require ("../../../Constants");
const ClearaPathBase = require("../setDGM/ClearaPath");

class ClearaPath extends ClearaPathBase {
  constructor(game) {
    super(game, "Clear a Path", "Magic 2015 Core Set", "M15");
  }
}

module.exports = ClearaPath;
