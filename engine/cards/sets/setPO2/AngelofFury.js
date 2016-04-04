"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AngelofFuryBase = require("../setME2/AngelofFury.js");

class AngelofFury extends AngelofFuryBase {
  constructor(game) {
    super(game, "Angel of Fury", "Portal Second Age", "PO2");
  }
}

module.exports = AngelofFury;
