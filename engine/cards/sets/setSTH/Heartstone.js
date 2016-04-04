"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HeartstoneBase = require("../setH09/Heartstone.js");

class Heartstone extends HeartstoneBase {
  constructor(game) {
    super(game, "Heartstone", "Stronghold", "STH");
  }
}

module.exports = Heartstone;
