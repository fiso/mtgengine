"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TormentedSoulBase = require("../setM12/TormentedSoul.js");

class TormentedSoul extends TormentedSoulBase {
  constructor(game) {
    super(game, "Tormented Soul", "Magic 2013", "M13");
  }
}

module.exports = TormentedSoul;
