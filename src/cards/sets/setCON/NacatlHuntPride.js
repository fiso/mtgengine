"use strict";
const Constants = require ("../../../Constants");
const NacatlHuntPrideBase = require("../setDDH/NacatlHuntPride");

class NacatlHuntPride extends NacatlHuntPrideBase {
  constructor (game) {
    super(game, "Nacatl Hunt-Pride", "Conflux", "CON");
  }
}

module.exports = NacatlHuntPride;
