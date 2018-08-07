"use strict";
const Constants = require ("../../../Constants");
const FertilidBase = require("../setBBD/Fertilid");

class Fertilid extends FertilidBase {
  constructor (game) {
    super(game, "Fertilid", "Commander 2011", "CMD");
  }
}

module.exports = Fertilid;
