"use strict";
const Constants = require ("../../../Constants");
const GoblinBalloonBrigadeBase = require("../setCN2/GoblinBalloonBrigade");

class GoblinBalloonBrigade extends GoblinBalloonBrigadeBase {
  constructor (game) {
    super(game, "Goblin Balloon Brigade", "Limited Edition Alpha", "LEA");
  }
}

module.exports = GoblinBalloonBrigade;
