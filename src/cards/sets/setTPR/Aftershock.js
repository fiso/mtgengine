"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Aftershock extends UnimplementedCard {
  constructor (game) {
    super(game, "Aftershock", "Tempest Remastered", "TPR");
  }
}

module.exports = Aftershock;
