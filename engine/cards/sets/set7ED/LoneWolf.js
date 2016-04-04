"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LoneWolfBase = require("../set8ED/LoneWolf.js");

class LoneWolf extends LoneWolfBase {
  constructor(game) {
    super(game, "Lone Wolf", "Seventh Edition", "7ED");
  }
}

module.exports = LoneWolf;
