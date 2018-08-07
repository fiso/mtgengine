"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Legerdemain extends UnimplementedCard {
  constructor (game) {
    super(game, "Legerdemain", "Tempest Remastered", "TPR");
  }
}

module.exports = Legerdemain;
