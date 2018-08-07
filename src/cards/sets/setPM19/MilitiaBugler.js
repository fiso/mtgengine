"use strict";
const Constants = require ("../../../Constants");
const MilitiaBuglerBase = require("../setM19/MilitiaBugler");

class MilitiaBugler extends MilitiaBuglerBase {
  constructor (game) {
    super(game, "Militia Bugler", "Core Set 2019 Promos", "PM19");
  }
}

module.exports = MilitiaBugler;
