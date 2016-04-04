"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FarseekBase = require("../setpFNM/Farseek.js");

class Farseek extends FarseekBase {
  constructor(game) {
    super(game, "Farseek", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Farseek;
