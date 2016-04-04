"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArchersParapet extends Card {
  constructor(game) {
    super(game, "Archers' Parapet", "Khans of Tarkir", "KTK");
  }
}

module.exports = ArchersParapet;
