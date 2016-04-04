"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ManicVandalBase = require("../setM11/ManicVandal.js");

class ManicVandal extends ManicVandalBase {
  constructor(game) {
    super(game, "Manic Vandal", "Magic 2012", "M12");
  }
}

module.exports = ManicVandal;
