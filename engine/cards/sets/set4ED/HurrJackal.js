"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HurrJackalBase = require("../setARN/HurrJackal.js");

class HurrJackal extends HurrJackalBase {
  constructor(game) {
    super(game, "Hurr Jackal", "Fourth Edition", "4ED");
  }
}

module.exports = HurrJackal;
