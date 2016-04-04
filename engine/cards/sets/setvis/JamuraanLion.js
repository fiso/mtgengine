"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JamuraanLion extends Card {
  constructor(game) {
    super(game, "Jamuraan Lion", "Visions", "VIS");
  }
}

module.exports = JamuraanLion;
