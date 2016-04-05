"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Scuttlemutt extends UnimplementedCard {
  constructor(game) {
    super(game, "Scuttlemutt", "Shadowmoor", "SHM");
  }
}

module.exports = Scuttlemutt;
