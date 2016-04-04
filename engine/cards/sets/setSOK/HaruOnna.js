"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HaruOnna extends Card {
  constructor(game) {
    super(game, "Haru-Onna", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = HaruOnna;
