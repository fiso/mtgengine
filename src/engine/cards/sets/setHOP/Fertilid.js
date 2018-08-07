"use strict";
const Constants = require ("../../../Constants");
const FertilidBase = require("../setBBD/Fertilid");

class Fertilid extends FertilidBase {
  constructor (game) {
    super(game, "Fertilid", "Planechase", "HOP");
  }
}

module.exports = Fertilid;
