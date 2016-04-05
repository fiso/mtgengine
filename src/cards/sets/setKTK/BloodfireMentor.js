"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodfireMentor extends UnimplementedCard {
  constructor(game) {
    super(game, "Bloodfire Mentor", "Khans of Tarkir", "KTK");
  }
}

module.exports = BloodfireMentor;
