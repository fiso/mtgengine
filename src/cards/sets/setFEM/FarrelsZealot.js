"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FarrelsZealot extends UnimplementedCard {
  constructor (game) {
    super(game, "Farrel's Zealot", "Fallen Empires", "FEM");
  }
}

module.exports = FarrelsZealot;
