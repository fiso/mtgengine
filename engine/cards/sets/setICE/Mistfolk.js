"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MistfolkBase = require("../setCST/Mistfolk.js");

class Mistfolk extends MistfolkBase {
  constructor(game) {
    super(game, "Mistfolk", "Ice Age", "ICE");
  }
}

module.exports = Mistfolk;
