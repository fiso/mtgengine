"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IronclawOrcsBase = require("../setCED/IronclawOrcs.js");

class IronclawOrcs extends IronclawOrcsBase {
  constructor(game) {
    super(game, "Ironclaw Orcs", "Limited Edition Beta", "LEB");
  }
}

module.exports = IronclawOrcs;
