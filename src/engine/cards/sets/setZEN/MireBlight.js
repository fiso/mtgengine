"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MireBlight extends UnimplementedCard {
  constructor (game) {
    super(game, "Mire Blight", "Zendikar", "ZEN");
  }
}

module.exports = MireBlight;
