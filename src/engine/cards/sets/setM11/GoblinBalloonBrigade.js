"use strict";
const Constants = require ("../../../Constants");
const GoblinBalloonBrigadeBase = require("../setCN2/GoblinBalloonBrigade");

class GoblinBalloonBrigade extends GoblinBalloonBrigadeBase {
  constructor (game) {
    super(game, "Goblin Balloon Brigade", "Magic 2011", "M11");
  }
}

module.exports = GoblinBalloonBrigade;
