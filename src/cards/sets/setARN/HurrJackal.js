"use strict";
const Constants = require ("../../../Constants");
const HurrJackalBase = require("../set4ED/HurrJackal");

class HurrJackal extends HurrJackalBase {
  constructor (game) {
    super(game, "Hurr Jackal", "Arabian Nights", "ARN");
  }
}

module.exports = HurrJackal;
