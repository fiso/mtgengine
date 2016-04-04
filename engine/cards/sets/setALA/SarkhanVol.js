"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SarkhanVolBase = require("../setMMA/SarkhanVol.js");

class SarkhanVol extends SarkhanVolBase {
  constructor(game) {
    super(game, "Sarkhan Vol", "Shards of Alara", "ALA");
  }
}

module.exports = SarkhanVol;
