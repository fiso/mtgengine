"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MasterofEtheriumBase = require("../setDDF/MasterofEtherium.js");

class MasterofEtherium extends MasterofEtheriumBase {
  constructor(game) {
    super(game, "Master of Etherium", "Shards of Alara", "ALA");
  }
}

module.exports = MasterofEtherium;
