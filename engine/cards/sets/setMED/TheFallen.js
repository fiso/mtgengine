"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TheFallenBase = require("../setCHR/TheFallen.js");

class TheFallen extends TheFallenBase {
  constructor(game) {
    super(game, "The Fallen", "Masters Edition", "MED");
  }
}

module.exports = TheFallen;
