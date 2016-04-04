"use strict";
const Constants = require ("../../../Constants");
const IronclawOrcsBase = require("../setCED/IronclawOrcs");

class IronclawOrcs extends IronclawOrcsBase {
  constructor(game) {
    super(game, "Ironclaw Orcs", "Limited Edition Alpha", "LEA");
  }
}

module.exports = IronclawOrcs;
