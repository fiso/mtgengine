"use strict";
const Constants = require ("../../../Constants");
const FertilidBase = require("../setARC/Fertilid");

class Fertilid extends FertilidBase {
  constructor(game) {
    super(game, "Fertilid", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Fertilid;
