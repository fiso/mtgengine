"use strict";
const Constants = require ("../../../Constants");
const TukatongueThallidBase = require("../setPCA/TukatongueThallid");

class TukatongueThallid extends TukatongueThallidBase {
  constructor (game) {
    super(game, "Tukatongue Thallid", "Conflux", "CON");
  }
}

module.exports = TukatongueThallid;
