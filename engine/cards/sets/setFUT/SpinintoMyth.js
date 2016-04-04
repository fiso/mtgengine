"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpinintoMythBase = require("../setARC/SpinintoMyth.js");

class SpinintoMyth extends SpinintoMythBase {
  constructor(game) {
    super(game, "Spin into Myth", "Future Sight", "FUT");
  }
}

module.exports = SpinintoMyth;
