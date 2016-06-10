"use strict";
const Constants = require ("../../../Constants");
const ManicVandalBase = require("../setM11/ManicVandal");

class ManicVandal extends ManicVandalBase {
  constructor (game) {
    super(game, "Manic Vandal", "Magic 2012", "M12");
  }
}

module.exports = ManicVandal;
