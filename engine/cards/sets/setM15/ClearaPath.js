"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ClearaPathBase = require("../setDGM/ClearaPath.js");

class ClearaPath extends ClearaPathBase {
  constructor(game) {
    super(game, "Clear a Path", "Magic 2015 Core Set", "M15");
  }
}

module.exports = ClearaPath;
