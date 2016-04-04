"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GigapedeBase = require("../setONS/Gigapede.js");

class Gigapede extends GigapedeBase {
  constructor(game) {
    super(game, "Gigapede", "Vintage Masters", "VMA");
  }
}

module.exports = Gigapede;
