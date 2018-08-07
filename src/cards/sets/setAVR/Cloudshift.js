"use strict";
const Constants = require ("../../../Constants");
const CloudshiftBase = require("../setA25/Cloudshift");

class Cloudshift extends CloudshiftBase {
  constructor (game) {
    super(game, "Cloudshift", "Avacyn Restored", "AVR");
  }
}

module.exports = Cloudshift;
