"use strict";
const Constants = require ("../../../Constants");
const PainBase = require("../setDDH/Pain");

class Pain extends PainBase {
  constructor (game) {
    super(game, "Pain", "Invasion", "INV");
  }
}

module.exports = Pain;
