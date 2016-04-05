"use strict";
const Constants = require ("../../../Constants");
const MasterofEtheriumBase = require("../setDDF/MasterofEtherium");

class MasterofEtherium extends MasterofEtheriumBase {
  constructor(game) {
    super(game, "Master of Etherium", "Shards of Alara", "ALA");
  }
}

module.exports = MasterofEtherium;
