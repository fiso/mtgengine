"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GrannysPaybackBase = require("../setpARL/GrannysPayback.js");

class GrannysPayback extends GrannysPaybackBase {
  constructor(game) {
    super(game, "Granny's Payback", "Unhinged", "UNH");
  }
}

module.exports = GrannysPayback;
