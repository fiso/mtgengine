"use strict";
const Constants = require ("../../../Constants");
const MartialCoupBase = require("../setC18/MartialCoup");

class MartialCoup extends MartialCoupBase {
  constructor (game) {
    super(game, "Martial Coup", "Conflux", "CON");
  }
}

module.exports = MartialCoup;
