"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TormentedSoulBase = require("../setM12/TormentedSoul.js");

class TormentedSoul extends TormentedSoulBase {
  constructor(game) {
    super(game, "Tormented Soul", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = TormentedSoul;
