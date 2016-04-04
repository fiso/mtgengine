"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MouthofRonom extends Card {
  constructor(game) {
    super(game, "Mouth of Ronom", "Coldsnap", "CSP");
  }
}

module.exports = MouthofRonom;
