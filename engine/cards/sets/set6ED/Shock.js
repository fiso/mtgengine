"use strict";
const Constants = require ("../../../Constants");
const ShockBase = require("../setBTD/Shock");

class Shock extends ShockBase {
  constructor(game) {
    super(game, "Shock", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Shock;
