"use strict";
const Constants = require ("../../../Constants");
const GreaterMossdogBase = require("../setDDJ/GreaterMossdog");

class GreaterMossdog extends GreaterMossdogBase {
  constructor(game) {
    super(game, "Greater Mossdog", "Modern Masters", "MMA");
  }
}

module.exports = GreaterMossdog;
