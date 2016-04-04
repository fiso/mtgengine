"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EtherealUsher extends Card {
  constructor(game) {
    super(game, "Ethereal Usher", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = EtherealUsher;
