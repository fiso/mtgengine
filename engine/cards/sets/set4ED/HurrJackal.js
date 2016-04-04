"use strict";
const Constants = require ("../../../Constants");
const HurrJackalBase = require("../setARN/HurrJackal");

class HurrJackal extends HurrJackalBase {
  constructor(game) {
    super(game, "Hurr Jackal", "Fourth Edition", "4ED");
  }
}

module.exports = HurrJackal;
