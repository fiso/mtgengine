"use strict";
const Constants = require ("../../../Constants");
const TukatongueThallidBase = require("../setCON/TukatongueThallid");

class TukatongueThallid extends TukatongueThallidBase {
  constructor (game) {
    super(game, "Tukatongue Thallid", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = TukatongueThallid;
