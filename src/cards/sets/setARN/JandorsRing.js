"use strict";
const Constants = require ("../../../Constants");
const JandorsRingBase = require("../setSUM/JandorsRing");

class JandorsRing extends JandorsRingBase {
  constructor (game) {
    super(game, "Jandor's Ring", "Arabian Nights", "ARN");
  }
}

module.exports = JandorsRing;
