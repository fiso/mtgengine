"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IceBase = require("../setAPC/Ice.js");

class Ice extends IceBase {
  constructor(game) {
    super(game, "Ice", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Ice;
