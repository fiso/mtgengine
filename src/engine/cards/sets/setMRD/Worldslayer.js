"use strict";
const Constants = require ("../../../Constants");
const WorldslayerBase = require("../setM12/Worldslayer");

class Worldslayer extends WorldslayerBase {
  constructor (game) {
    super(game, "Worldslayer", "Mirrodin", "MRD");
  }
}

module.exports = Worldslayer;
