"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Equipoise extends Card {
  constructor(game) {
    super(game, "Equipoise", "Visions", "VIS");
  }
}

module.exports = Equipoise;
