"use strict";
const Constants = require ("../../../Constants");
const EurekaBase = require("../setVMA/Eureka");

class Eureka extends EurekaBase {
  constructor (game) {
    super(game, "Eureka", "Legends", "LEG");
  }
}

module.exports = Eureka;
