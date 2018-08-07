"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelicProtector extends UnimplementedCard {
  constructor (game) {
    super(game, "Angelic Protector", "Tempest Remastered", "TPR");
  }
}

module.exports = AngelicProtector;
