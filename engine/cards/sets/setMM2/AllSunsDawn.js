"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AllSunsDawnBase = require("../set5DN/AllSunsDawn.js");

class AllSunsDawn extends AllSunsDawnBase {
  constructor(game) {
    super(game, "All Suns' Dawn", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = AllSunsDawn;
