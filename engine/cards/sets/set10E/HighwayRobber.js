"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HighwayRobberBase = require("../setDDM/HighwayRobber.js");

class HighwayRobber extends HighwayRobberBase {
  constructor(game) {
    super(game, "Highway Robber", "Tenth Edition", "10E");
  }
}

module.exports = HighwayRobber;
