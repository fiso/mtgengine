"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ephemeron extends UnimplementedCard {
  constructor (game) {
    super(game, "Ephemeron", "Tempest Remastered", "TPR");
  }
}

module.exports = Ephemeron;
