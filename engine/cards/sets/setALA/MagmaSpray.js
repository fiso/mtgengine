"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MagmaSprayBase = require("../setDDJ/MagmaSpray.js");

class MagmaSpray extends MagmaSprayBase {
  constructor(game) {
    super(game, "Magma Spray", "Shards of Alara", "ALA");
  }
}

module.exports = MagmaSpray;
