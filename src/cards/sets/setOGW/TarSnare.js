"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TarSnare extends UnimplementedCard {
  constructor (game) {
    super(game, "Tar Snare", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = TarSnare;
