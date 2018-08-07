"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MantisRider extends UnimplementedCard {
  constructor (game) {
    super(game, "Mantis Rider", "Khans of Tarkir", "KTK");
  }
}

module.exports = MantisRider;
