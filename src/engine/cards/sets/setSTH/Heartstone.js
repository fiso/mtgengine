"use strict";
const Constants = require ("../../../Constants");
const HeartstoneBase = require("../setH09/Heartstone");

class Heartstone extends HeartstoneBase {
  constructor (game) {
    super(game, "Heartstone", "Stronghold", "STH");
  }
}

module.exports = Heartstone;
