"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FarseekBase = require("../setpFNM/Farseek.js");

class Farseek extends FarseekBase {
  constructor(game) {
    super(game, "Farseek", "Magic 2013", "M13");
  }
}

module.exports = Farseek;
