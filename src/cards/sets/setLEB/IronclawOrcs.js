"use strict";
const Constants = require ("../../../Constants");
const IronclawOrcsBase = require("../setME2/IronclawOrcs");

class IronclawOrcs extends IronclawOrcsBase {
  constructor (game) {
    super(game, "Ironclaw Orcs", "Limited Edition Beta", "LEB");
  }
}

module.exports = IronclawOrcs;
