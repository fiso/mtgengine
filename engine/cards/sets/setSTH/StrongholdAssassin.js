"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StrongholdAssassinBase = require("../setC13/StrongholdAssassin.js");

class StrongholdAssassin extends StrongholdAssassinBase {
  constructor(game) {
    super(game, "Stronghold Assassin", "Stronghold", "STH");
  }
}

module.exports = StrongholdAssassin;
