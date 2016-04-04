"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SyphonMindBase = require("../setC14/SyphonMind.js");

class SyphonMind extends SyphonMindBase {
  constructor(game) {
    super(game, "Syphon Mind", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = SyphonMind;
