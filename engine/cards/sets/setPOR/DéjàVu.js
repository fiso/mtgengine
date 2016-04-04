"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DéjàVu extends Card {
  constructor(game) {
    super(game, "Déjà Vu", "Portal", "POR");
  }
}

module.exports = DéjàVu;
