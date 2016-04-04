"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AllHallowsEveBase = require("../setLEG/AllHallowsEve.js");

class AllHallowsEve extends AllHallowsEveBase {
  constructor(game) {
    super(game, "All Hallow's Eve", "Masters Edition III", "ME3");
  }
}

module.exports = AllHallowsEve;
