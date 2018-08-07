"use strict";
const Constants = require ("../../../Constants");
const MilitiaBuglerBase = require("../setM19/MilitiaBugler");

class MilitiaBugler extends MilitiaBuglerBase {
  constructor (game) {
    super(game, "Militia Bugler", "Magic Online Promos", "PRM");
  }
}

module.exports = MilitiaBugler;
