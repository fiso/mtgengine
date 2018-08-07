"use strict";
const Constants = require ("../../../Constants");
const MartialCoupBase = require("../setC18/MartialCoup");

class MartialCoup extends MartialCoupBase {
  constructor (game) {
    super(game, "Martial Coup", "Commander 2014", "C14");
  }
}

module.exports = MartialCoup;
