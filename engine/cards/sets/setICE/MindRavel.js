"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MindRavelBase = require("../set5ED/MindRavel.js");

class MindRavel extends MindRavelBase {
  constructor(game) {
    super(game, "Mind Ravel", "Ice Age", "ICE");
  }
}

module.exports = MindRavel;
