"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const QuirionRangerBase = require("../setpFNM/QuirionRanger.js");

class QuirionRanger extends QuirionRangerBase {
  constructor(game) {
    super(game, "Quirion Ranger", "Visions", "VIS");
  }
}

module.exports = QuirionRanger;
