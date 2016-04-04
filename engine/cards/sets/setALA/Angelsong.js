"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AngelsongBase = require("../setDD3_DVD/Angelsong.js");

class Angelsong extends AngelsongBase {
  constructor(game) {
    super(game, "Angelsong", "Shards of Alara", "ALA");
  }
}

module.exports = Angelsong;
