"use strict";
const Constants = require ("../../../Constants");
const ShuntBase = require("../set10E/Shunt");

class Shunt extends ShuntBase {
  constructor (game) {
    super(game, "Shunt", "Darksteel", "DST");
  }
}

module.exports = Shunt;
