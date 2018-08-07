"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CanalDredger extends UnimplementedCard {
  constructor (game) {
    super(game, "Canal Dredger", "Conspiracy", "CNS");
  }
}

module.exports = CanalDredger;
