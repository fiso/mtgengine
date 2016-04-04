"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SeasideCitadelBase = require("../setC13/SeasideCitadel.js");

class SeasideCitadel extends SeasideCitadelBase {
  constructor(game) {
    super(game, "Seaside Citadel", "Shards of Alara", "ALA");
  }
}

module.exports = SeasideCitadel;
