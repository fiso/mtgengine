"use strict";
const Constants = require ("../../../Constants");
const PhytotitanBase = require("../setM15/Phytotitan");

class Phytotitan extends PhytotitanBase {
  constructor (game) {
    super(game, "Phytotitan", "Magic Online Promos", "PRM");
  }
}

module.exports = Phytotitan;
