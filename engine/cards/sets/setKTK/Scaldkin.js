"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Scaldkin extends UnimplementedCard {
  constructor(game) {
    super(game, "Scaldkin", "Khans of Tarkir", "KTK");
  }
}

module.exports = Scaldkin;
