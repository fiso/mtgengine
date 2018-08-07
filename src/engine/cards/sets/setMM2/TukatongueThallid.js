"use strict";
const Constants = require ("../../../Constants");
const TukatongueThallidBase = require("../setPCA/TukatongueThallid");

class TukatongueThallid extends TukatongueThallidBase {
  constructor (game) {
    super(game, "Tukatongue Thallid", "Modern Masters 2015", "MM2");
  }
}

module.exports = TukatongueThallid;
