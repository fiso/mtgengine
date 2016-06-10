"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YawgmothsAgenda extends UnimplementedCard {
  constructor (game) {
    super(game, "Yawgmoth's Agenda", "Invasion", "INV");
  }
}

module.exports = YawgmothsAgenda;
