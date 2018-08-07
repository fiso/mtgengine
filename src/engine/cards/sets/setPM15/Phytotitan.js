"use strict";
const Constants = require ("../../../Constants");
const PhytotitanBase = require("../setM15/Phytotitan");

class Phytotitan extends PhytotitanBase {
  constructor (game) {
    super(game, "Phytotitan", "Magic 2015 Promos", "PM15");
  }
}

module.exports = Phytotitan;
