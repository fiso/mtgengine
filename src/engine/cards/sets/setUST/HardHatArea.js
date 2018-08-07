"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HardHatArea extends UnimplementedCard {
  constructor (game) {
    super(game, "Hard Hat Area", "Unstable", "UST");
  }
}

module.exports = HardHatArea;
