"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinBalloonBrigade extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Balloon Brigade", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = GoblinBalloonBrigade;
