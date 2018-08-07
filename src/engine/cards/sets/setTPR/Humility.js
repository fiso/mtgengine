"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Humility extends UnimplementedCard {
  constructor (game) {
    super(game, "Humility", "Tempest Remastered", "TPR");
  }
}

module.exports = Humility;
