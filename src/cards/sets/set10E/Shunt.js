"use strict";
const Constants = require ("../../../Constants");
const ShuntBase = require("../setDST/Shunt");

class Shunt extends ShuntBase {
  constructor (game) {
    super(game, "Shunt", "Tenth Edition", "10E");
  }
}

module.exports = Shunt;
