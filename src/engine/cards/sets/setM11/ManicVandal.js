"use strict";
const Constants = require ("../../../Constants");
const ManicVandalBase = require("../setM12/ManicVandal");

class ManicVandal extends ManicVandalBase {
  constructor (game) {
    super(game, "Manic Vandal", "Magic 2011", "M11");
  }
}

module.exports = ManicVandal;
