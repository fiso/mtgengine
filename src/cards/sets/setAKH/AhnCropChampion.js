"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AhnCropChampion extends UnimplementedCard {
  constructor (game) {
    super(game, "Ahn-Crop Champion", "Amonkhet", "AKH");
  }
}

module.exports = AhnCropChampion;
