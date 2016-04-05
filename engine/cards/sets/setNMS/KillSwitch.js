"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KillSwitch extends UnimplementedCard {
  constructor(game) {
    super(game, "Kill Switch", "Nemesis", "NMS");
  }
}

module.exports = KillSwitch;
