"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HostilityBase = require("../setC15/Hostility.js");

class Hostility extends HostilityBase {
  constructor(game) {
    super(game, "Hostility", "Lorwyn", "LRW");
  }
}

module.exports = Hostility;
