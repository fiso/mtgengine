"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LayoftheLandBase = require("../setAPC/LayoftheLand.js");

class LayoftheLand extends LayoftheLandBase {
  constructor(game) {
    super(game, "Lay of the Land", "Magic 2014 Core Set", "M14");
  }
}

module.exports = LayoftheLand;
