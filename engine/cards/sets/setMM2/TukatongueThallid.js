"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TukatongueThallidBase = require("../setCON/TukatongueThallid.js");

class TukatongueThallid extends TukatongueThallidBase {
  constructor(game) {
    super(game, "Tukatongue Thallid", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = TukatongueThallid;
