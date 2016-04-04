"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThallidBase = require("../setFEM/Thallid.js");

class Thallid extends ThallidBase {
  constructor(game) {
    super(game, "Thallid", "Modern Masters", "MMA");
  }
}

module.exports = Thallid;
