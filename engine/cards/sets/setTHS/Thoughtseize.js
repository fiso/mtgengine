"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThoughtseizeBase = require("../setLRW/Thoughtseize.js");

class Thoughtseize extends ThoughtseizeBase {
  constructor(game) {
    super(game, "Thoughtseize", "Theros", "THS");
  }
}

module.exports = Thoughtseize;
