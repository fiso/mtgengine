"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HallsofMist extends UnimplementedCard {
  constructor(game) {
    super(game, "Halls of Mist", "Ice Age", "ICE");
  }
}

module.exports = HallsofMist;
