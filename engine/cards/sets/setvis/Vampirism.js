"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VampirismBase = require("../setMGB/Vampirism.js");

class Vampirism extends VampirismBase {
  constructor(game) {
    super(game, "Vampirism", "Visions", "VIS");
  }
}

module.exports = Vampirism;
