"use strict";
const Constants = require ("../../../Constants");
const AngelsongBase = require("../setDD3_DVD/Angelsong");

class Angelsong extends AngelsongBase {
  constructor (game) {
    super(game, "Angelsong", "Shards of Alara", "ALA");
  }
}

module.exports = Angelsong;
