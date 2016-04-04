"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MutilateBase = require("../setC14/Mutilate.js");

class Mutilate extends MutilateBase {
  constructor(game) {
    super(game, "Mutilate", "Torment", "TOR");
  }
}

module.exports = Mutilate;
