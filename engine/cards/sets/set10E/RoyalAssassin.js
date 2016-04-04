"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RoyalAssassinBase = require("../setCED/RoyalAssassin.js");

class RoyalAssassin extends RoyalAssassinBase {
  constructor(game) {
    super(game, "Royal Assassin", "Tenth Edition", "10E");
  }
}

module.exports = RoyalAssassin;
