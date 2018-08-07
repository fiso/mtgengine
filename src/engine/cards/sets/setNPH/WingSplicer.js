"use strict";
const Constants = require ("../../../Constants");
const WingSplicerBase = require("../setMM3/WingSplicer");

class WingSplicer extends WingSplicerBase {
  constructor (game) {
    super(game, "Wing Splicer", "New Phyrexia", "NPH");
  }
}

module.exports = WingSplicer;
