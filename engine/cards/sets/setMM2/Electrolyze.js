"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElectrolyzeBase = require("../setpCMP/Electrolyze.js");

class Electrolyze extends ElectrolyzeBase {
  constructor(game) {
    super(game, "Electrolyze", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Electrolyze;
