"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TukatongueThallidBase = require("../setCON/TukatongueThallid.js");

class TukatongueThallid extends TukatongueThallidBase {
  constructor(game) {
    super(game, "Tukatongue Thallid", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = TukatongueThallid;
