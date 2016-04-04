"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class YawgmothsAgenda extends Card {
  constructor(game) {
    super(game, "Yawgmoth's Agenda", "Invasion", "INV");
  }
}

module.exports = YawgmothsAgenda;
