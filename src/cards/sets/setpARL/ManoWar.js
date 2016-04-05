"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManoWar extends UnimplementedCard {
  constructor(game) {
    super(game, "Man-o'-War", "Arena League", "pARL");
  }
}

module.exports = ManoWar;
