"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Tamanoa extends Card {
  constructor(game) {
    super(game, "Tamanoa", "Coldsnap", "CSP");
  }
}

module.exports = Tamanoa;
