"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class YoungWolf extends Card {
  constructor(game) {
    super(game, "Young Wolf", "Dark Ascension", "DKA");
  }
}

module.exports = YoungWolf;
