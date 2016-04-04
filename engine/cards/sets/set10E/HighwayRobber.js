"use strict";
const Constants = require ("../../../Constants");
const HighwayRobberBase = require("../setDDM/HighwayRobber");

class HighwayRobber extends HighwayRobberBase {
  constructor(game) {
    super(game, "Highway Robber", "Tenth Edition", "10E");
  }
}

module.exports = HighwayRobber;
