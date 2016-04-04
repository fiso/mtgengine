"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FogBank extends Card {
  constructor(game) {
    super(game, "Fog Bank", "Commander 2013 Edition", "C13");
  }
}

module.exports = FogBank;
