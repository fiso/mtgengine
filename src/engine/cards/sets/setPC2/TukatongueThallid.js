"use strict";
const Constants = require ("../../../Constants");
const TukatongueThallidBase = require("../setPCA/TukatongueThallid");

class TukatongueThallid extends TukatongueThallidBase {
  constructor (game) {
    super(game, "Tukatongue Thallid", "Planechase 2012", "PC2");
  }
}

module.exports = TukatongueThallid;
