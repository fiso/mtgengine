"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WhipcorderBase = require("../setpFNM/Whipcorder.js");

class Whipcorder extends WhipcorderBase {
  constructor(game) {
    super(game, "Whipcorder", "Onslaught", "ONS");
  }
}

module.exports = Whipcorder;
