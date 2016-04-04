"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RuinationBase = require("../setCMD/Ruination.js");

class Ruination extends RuinationBase {
  constructor(game) {
    super(game, "Ruination", "Stronghold", "STH");
  }
}

module.exports = Ruination;
