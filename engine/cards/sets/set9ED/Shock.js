"use strict";
const Constants = require ("../../../Constants");
const ShockBase = require("../setBTD/Shock");

class Shock extends ShockBase {
  constructor(game) {
    super(game, "Shock", "Ninth Edition", "9ED");
  }
}

module.exports = Shock;
