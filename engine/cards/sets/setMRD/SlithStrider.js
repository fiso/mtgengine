"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SlithStriderBase = require("../setDDI/SlithStrider.js");

class SlithStrider extends SlithStriderBase {
  constructor(game) {
    super(game, "Slith Strider", "Mirrodin", "MRD");
  }
}

module.exports = SlithStrider;
