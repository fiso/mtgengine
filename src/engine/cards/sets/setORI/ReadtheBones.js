"use strict";
const Constants = require ("../../../Constants");
const ReadtheBonesBase = require("../setC17/ReadtheBones");

class ReadtheBones extends ReadtheBonesBase {
  constructor (game) {
    super(game, "Read the Bones", "Magic Origins", "ORI");
  }
}

module.exports = ReadtheBones;
