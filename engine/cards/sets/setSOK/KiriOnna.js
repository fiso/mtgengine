"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KiriOnna extends Card {
  constructor(game) {
    super(game, "Kiri-Onna", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = KiriOnna;
