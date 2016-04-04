"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LoneWolfBase = require("../set8ED/LoneWolf.js");

class LoneWolf extends LoneWolfBase {
  constructor(game) {
    super(game, "Lone Wolf", "Portal Second Age", "PO2");
  }
}

module.exports = LoneWolf;
