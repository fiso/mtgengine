"use strict";
const Constants = require ("../../../Constants");
const GreaterMossdogBase = require("../setDDJ/GreaterMossdog");

class GreaterMossdog extends GreaterMossdogBase {
  constructor (game) {
    super(game, "Greater Mossdog", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = GreaterMossdog;
