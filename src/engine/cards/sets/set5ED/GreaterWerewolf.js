"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GreaterWerewolf extends UnimplementedCard {
  constructor (game) {
    super(game, "Greater Werewolf", "Fifth Edition", "5ED");
  }
}

module.exports = GreaterWerewolf;
