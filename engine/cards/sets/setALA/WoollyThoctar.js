"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WoollyThoctarBase = require("../setDDH/WoollyThoctar.js");

class WoollyThoctar extends WoollyThoctarBase {
  constructor(game) {
    super(game, "Woolly Thoctar", "Shards of Alara", "ALA");
  }
}

module.exports = WoollyThoctar;
