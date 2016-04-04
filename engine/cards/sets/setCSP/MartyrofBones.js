"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MartyrofBones extends Card {
  constructor(game) {
    super(game, "Martyr of Bones", "Coldsnap", "CSP");
  }
}

module.exports = MartyrofBones;
