"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FaithsFettersBase = require("../setC15/FaithsFetters.js");

class FaithsFetters extends FaithsFettersBase {
  constructor(game) {
    super(game, "Faith's Fetters", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = FaithsFetters;
