"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AnacondaBase = require("../set9ED/Anaconda.js");

class Anaconda extends AnacondaBase {
  constructor(game) {
    super(game, "Anaconda", "Seventh Edition", "7ED");
  }
}

module.exports = Anaconda;
