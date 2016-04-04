"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JandorsRingBase = require("../setARN/JandorsRing.js");

class JandorsRing extends JandorsRingBase {
  constructor(game) {
    super(game, "Jandor's Ring", "Revised Edition", "3ED");
  }
}

module.exports = JandorsRing;
