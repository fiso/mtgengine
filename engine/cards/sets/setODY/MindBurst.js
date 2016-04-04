"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindBurst extends UnimplementedCard {
  constructor(game) {
    super(game, "Mind Burst", "Odyssey", "ODY");
  }
}

module.exports = MindBurst;
