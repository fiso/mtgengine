"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EraseBase = require("../setKTK/Erase.js");

class Erase extends EraseBase {
  constructor(game) {
    super(game, "Erase", "Magic 2013", "M13");
  }
}

module.exports = Erase;
