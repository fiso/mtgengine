"use strict";
const Constants = require ("../../../Constants");
const AllHallowsEveBase = require("../setTD0/AllHallowsEve");

class AllHallowsEve extends AllHallowsEveBase {
  constructor (game) {
    super(game, "All Hallow's Eve", "Legends", "LEG");
  }
}

module.exports = AllHallowsEve;
