"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GreaterWerewolf extends Card {
  constructor(game) {
    super(game, "Greater Werewolf", "Fifth Edition", "5ED");
  }
}

module.exports = GreaterWerewolf;
