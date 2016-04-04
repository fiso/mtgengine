"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GriptideBase = require("../setDKA/Griptide.js");

class Griptide extends GriptideBase {
  constructor(game) {
    super(game, "Griptide", "Theros", "THS");
  }
}

module.exports = Griptide;
