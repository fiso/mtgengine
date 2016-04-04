"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VividMeadowBase = require("../setC15/VividMeadow.js");

class VividMeadow extends VividMeadowBase {
  constructor(game) {
    super(game, "Vivid Meadow", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = VividMeadow;
