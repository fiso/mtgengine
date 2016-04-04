"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SunwebBase = require("../set6ED/Sunweb.js");

class Sunweb extends SunwebBase {
  constructor(game) {
    super(game, "Sunweb", "Mirage", "MIR");
  }
}

module.exports = Sunweb;
