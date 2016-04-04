"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RecklessSpite extends Card {
  constructor(game) {
    super(game, "Reckless Spite", "Commander 2013 Edition", "C13");
  }
}

module.exports = RecklessSpite;
