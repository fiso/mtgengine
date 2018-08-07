"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HorrorofHorrors extends UnimplementedCard {
  constructor (game) {
    super(game, "Horror of Horrors", "Ninth Edition", "9ED");
  }
}

module.exports = HorrorofHorrors;
