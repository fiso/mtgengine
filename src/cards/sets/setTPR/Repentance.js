"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Repentance extends UnimplementedCard {
  constructor (game) {
    super(game, "Repentance", "Tempest Remastered", "TPR");
  }
}

module.exports = Repentance;
