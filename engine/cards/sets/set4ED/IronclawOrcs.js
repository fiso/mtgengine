"use strict";
const Constants = require ("../../../Constants");
const IronclawOrcsBase = require("../setCED/IronclawOrcs");

class IronclawOrcs extends IronclawOrcsBase {
  constructor(game) {
    super(game, "Ironclaw Orcs", "Fourth Edition", "4ED");
  }
}

module.exports = IronclawOrcs;
