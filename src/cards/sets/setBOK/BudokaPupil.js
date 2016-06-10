"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BudokaPupil extends UnimplementedCard {
  constructor (game) {
    super(game, "Budoka Pupil", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = BudokaPupil;
