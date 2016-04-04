"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WorldslayerBase = require("../setM12/Worldslayer.js");

class Worldslayer extends WorldslayerBase {
  constructor(game) {
    super(game, "Worldslayer", "Mirrodin", "MRD");
  }
}

module.exports = Worldslayer;
