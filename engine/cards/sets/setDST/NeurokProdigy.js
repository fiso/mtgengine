"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NeurokProdigy extends Card {
  constructor(game) {
    super(game, "Neurok Prodigy", "Darksteel", "DST");
  }
}

module.exports = NeurokProdigy;
