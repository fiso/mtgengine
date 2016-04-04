"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RegenerationBase = require("../set6ED/Regeneration.js");

class Regeneration extends RegenerationBase {
  constructor(game) {
    super(game, "Regeneration", "Tenth Edition", "10E");
  }
}

module.exports = Regeneration;
