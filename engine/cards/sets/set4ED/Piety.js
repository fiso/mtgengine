"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PietyBase = require("../setARN/Piety.js");

class Piety extends PietyBase {
  constructor(game) {
    super(game, "Piety", "Fourth Edition", "4ED");
  }
}

module.exports = Piety;
