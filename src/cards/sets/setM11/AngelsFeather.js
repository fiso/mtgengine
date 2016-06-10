"use strict";
const Constants = require ("../../../Constants");
const AngelsFeatherBase = require("../setDST/AngelsFeather");

class AngelsFeather extends AngelsFeatherBase {
  constructor (game) {
    super(game, "Angel's Feather", "Magic 2011", "M11");
  }
}

module.exports = AngelsFeather;
