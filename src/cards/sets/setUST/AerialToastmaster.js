"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AerialToastmaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Aerial Toastmaster", "Unstable", "UST");
  }
}

module.exports = AerialToastmaster;
