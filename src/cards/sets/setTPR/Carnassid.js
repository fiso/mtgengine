"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Carnassid extends UnimplementedCard {
  constructor (game) {
    super(game, "Carnassid", "Tempest Remastered", "TPR");
  }
}

module.exports = Carnassid;
