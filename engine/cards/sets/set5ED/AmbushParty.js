"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AmbushParty extends Card {
  constructor(game) {
    super(game, "Ambush Party", "Fifth Edition", "5ED");
  }
}

module.exports = AmbushParty;
