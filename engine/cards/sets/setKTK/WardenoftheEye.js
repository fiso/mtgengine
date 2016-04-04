"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WardenoftheEye extends UnimplementedCard {
  constructor(game) {
    super(game, "Warden of the Eye", "Khans of Tarkir", "KTK");
  }
}

module.exports = WardenoftheEye;
