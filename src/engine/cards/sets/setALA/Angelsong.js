"use strict";
const Constants = require ("../../../Constants");
const AngelsongBase = require("../setDVD/Angelsong");

class Angelsong extends AngelsongBase {
  constructor (game) {
    super(game, "Angelsong", "Shards of Alara", "ALA");
  }
}

module.exports = Angelsong;
