"use strict";
const Constants = require ("../../../Constants");
const TukatongueThallidBase = require("../setCON/TukatongueThallid");

class TukatongueThallid extends TukatongueThallidBase {
  constructor(game) {
    super(game, "Tukatongue Thallid", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = TukatongueThallid;
