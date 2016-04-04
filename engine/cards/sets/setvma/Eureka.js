"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EurekaBase = require("../setLEG/Eureka.js");

class Eureka extends EurekaBase {
  constructor(game) {
    super(game, "Eureka", "Vintage Masters", "VMA");
  }
}

module.exports = Eureka;
