"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KorHaven extends Card {
  constructor(game) {
    super(game, "Kor Haven", "Nemesis", "NMS");
  }
}

module.exports = KorHaven;
