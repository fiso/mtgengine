"use strict";
const Constants = require ("../../../Constants");
const EurekaBase = require("../setLEG/Eureka");

class Eureka extends EurekaBase {
  constructor (game) {
    super(game, "Eureka", "Vintage Masters", "VMA");
  }
}

module.exports = Eureka;
