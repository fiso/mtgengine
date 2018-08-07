"use strict";
const Constants = require ("../../../Constants");
const SageOwlBase = require("../setM10/SageOwl");

class SageOwl extends SageOwlBase {
  constructor (game) {
    super(game, "Sage Owl", "Weatherlight", "WTH");
  }
}

module.exports = SageOwl;
