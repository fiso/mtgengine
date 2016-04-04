"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GreaterMossdogBase = require("../setDDJ/GreaterMossdog.js");

class GreaterMossdog extends GreaterMossdogBase {
  constructor(game) {
    super(game, "Greater Mossdog", "Modern Masters", "MMA");
  }
}

module.exports = GreaterMossdog;
