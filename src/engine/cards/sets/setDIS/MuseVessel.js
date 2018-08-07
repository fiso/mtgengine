"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MuseVessel extends UnimplementedCard {
  constructor (game) {
    super(game, "Muse Vessel", "Dissension", "DIS");
  }
}

module.exports = MuseVessel;
