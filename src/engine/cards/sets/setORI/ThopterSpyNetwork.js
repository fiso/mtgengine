"use strict";
const Constants = require ("../../../Constants");
const ThopterSpyNetworkBase = require("../setC18/ThopterSpyNetwork");

class ThopterSpyNetwork extends ThopterSpyNetworkBase {
  constructor (game) {
    super(game, "Thopter Spy Network", "Magic Origins", "ORI");
  }
}

module.exports = ThopterSpyNetwork;
