"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WhereAncientsTreadBase = require("../setC13/WhereAncientsTread.js");

class WhereAncientsTread extends WhereAncientsTreadBase {
  constructor(game) {
    super(game, "Where Ancients Tread", "Shards of Alara", "ALA");
  }
}

module.exports = WhereAncientsTread;
