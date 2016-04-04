"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NecropotenceBase = require("../setDKM/Necropotence.js");

class Necropotence extends NecropotenceBase {
  constructor(game) {
    super(game, "Necropotence", "Vintage Masters", "VMA");
  }
}

module.exports = Necropotence;
