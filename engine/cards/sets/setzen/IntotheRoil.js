"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IntotheRoilBase = require("../setC14/IntotheRoil.js");

class IntotheRoil extends IntotheRoilBase {
  constructor(game) {
    super(game, "Into the Roil", "Zendikar", "ZEN");
  }
}

module.exports = IntotheRoil;
