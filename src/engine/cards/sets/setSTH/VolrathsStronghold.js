"use strict";
const Constants = require ("../../../Constants");
const VolrathsStrongholdBase = require("../setTPR/VolrathsStronghold");

class VolrathsStronghold extends VolrathsStrongholdBase {
  constructor (game) {
    super(game, "Volrath's Stronghold", "Stronghold", "STH");
  }
}

module.exports = VolrathsStronghold;
