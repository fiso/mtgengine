"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WrenchRigger extends UnimplementedCard {
  constructor (game) {
    super(game, "Wrench-Rigger", "Unstable", "UST");
  }
}

module.exports = WrenchRigger;
