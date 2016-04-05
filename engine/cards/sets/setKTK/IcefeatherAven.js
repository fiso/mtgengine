"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IcefeatherAven extends UnimplementedCard {
  constructor(game) {
    super(game, "Icefeather Aven", "Khans of Tarkir", "KTK");
  }
}

module.exports = IcefeatherAven;
