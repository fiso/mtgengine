"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PeaceofMindBase = require("../setEXO/PeaceofMind.js");

class PeaceofMind extends PeaceofMindBase {
  constructor(game) {
    super(game, "Peace of Mind", "Ninth Edition", "9ED");
  }
}

module.exports = PeaceofMind;
