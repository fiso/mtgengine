"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AngelofDespairBase = require("../setGPT/AngelofDespair.js");

class AngelofDespair extends AngelofDespairBase {
  constructor(game) {
    super(game, "Angel of Despair", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = AngelofDespair;
