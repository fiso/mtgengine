"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WardofBones extends Card {
  constructor(game) {
    super(game, "Ward of Bones", "Eventide", "EVE");
  }
}

module.exports = WardofBones;
