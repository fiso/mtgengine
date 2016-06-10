"use strict";
const Constants = require ("../../../Constants");
const JandorsRingBase = require("../setARN/JandorsRing");

class JandorsRing extends JandorsRingBase {
  constructor (game) {
    super(game, "Jandor's Ring", "Revised Edition", "3ED");
  }
}

module.exports = JandorsRing;
