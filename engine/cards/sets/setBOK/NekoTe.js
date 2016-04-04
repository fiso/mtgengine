"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NekoTe extends Card {
  constructor(game) {
    super(game, "Neko-Te", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = NekoTe;
