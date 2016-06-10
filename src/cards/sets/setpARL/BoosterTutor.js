"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoosterTutor extends UnimplementedCard {
  constructor (game) {
    super(game, "Booster Tutor", "Arena League", "pARL");
  }
}

module.exports = BoosterTutor;
