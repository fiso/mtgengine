"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KinTreeWarden extends UnimplementedCard {
  constructor (game) {
    super(game, "Kin-Tree Warden", "Khans of Tarkir", "KTK");
  }
}

module.exports = KinTreeWarden;
