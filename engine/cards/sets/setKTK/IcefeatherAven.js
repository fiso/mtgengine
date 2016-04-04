"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IcefeatherAven extends Card {
  constructor(game) {
    super(game, "Icefeather Aven", "Khans of Tarkir", "KTK");
  }
}

module.exports = IcefeatherAven;
