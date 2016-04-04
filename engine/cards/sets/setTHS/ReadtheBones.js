"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ReadtheBonesBase = require("../setC14/ReadtheBones.js");

class ReadtheBones extends ReadtheBonesBase {
  constructor(game) {
    super(game, "Read the Bones", "Theros", "THS");
  }
}

module.exports = ReadtheBones;
