"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NyxbornWolf extends Card {
  constructor(game) {
    super(game, "Nyxborn Wolf", "Born of the Gods", "BNG");
  }
}

module.exports = NyxbornWolf;
