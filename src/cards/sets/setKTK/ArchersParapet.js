"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArchersParapet extends UnimplementedCard {
  constructor (game) {
    super(game, "Archers' Parapet", "Khans of Tarkir", "KTK");
  }
}

module.exports = ArchersParapet;
