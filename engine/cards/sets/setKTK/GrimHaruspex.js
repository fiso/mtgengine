"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrimHaruspex extends UnimplementedCard {
  constructor(game) {
    super(game, "Grim Haruspex", "Khans of Tarkir", "KTK");
  }
}

module.exports = GrimHaruspex;
