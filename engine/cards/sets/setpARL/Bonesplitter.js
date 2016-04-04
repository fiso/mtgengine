"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Bonesplitter extends Card {
  constructor(game) {
    super(game, "Bonesplitter", "Arena League", "pARL");
  }
}

module.exports = Bonesplitter;
