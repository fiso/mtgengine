"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LoneWolfBase = require("../set8ED/LoneWolf.js");

class LoneWolf extends LoneWolfBase {
  constructor(game) {
    super(game, "Lone Wolf", "Starter 1999", "S99");
  }
}

module.exports = LoneWolf;
