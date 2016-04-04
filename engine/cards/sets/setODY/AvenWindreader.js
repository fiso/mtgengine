"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AvenWindreaderBase = require("../set9ED/AvenWindreader.js");

class AvenWindreader extends AvenWindreaderBase {
  constructor(game) {
    super(game, "Aven Windreader", "Odyssey", "ODY");
  }
}

module.exports = AvenWindreader;
