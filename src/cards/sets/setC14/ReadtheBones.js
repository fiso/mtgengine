"use strict";
const Constants = require ("../../../Constants");
const ReadtheBonesBase = require("../setC17/ReadtheBones");

class ReadtheBones extends ReadtheBonesBase {
  constructor (game) {
    super(game, "Read the Bones", "Commander 2014", "C14");
  }
}

module.exports = ReadtheBones;
