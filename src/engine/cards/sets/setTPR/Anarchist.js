"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Anarchist extends UnimplementedCard {
  constructor (game) {
    super(game, "Anarchist", "Tempest Remastered", "TPR");
  }
}

module.exports = Anarchist;
