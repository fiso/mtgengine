"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScourBase = require("../setBOK/Scour.js");

class Scour extends ScourBase {
  constructor(game) {
    super(game, "Scour", "Urza's Destiny", "UDS");
  }
}

module.exports = Scour;
