"use strict";
const Constants = require ("../../../Constants");
const GoblinBalloonBrigadeBase = require("../setATH/GoblinBalloonBrigade");

class GoblinBalloonBrigade extends GoblinBalloonBrigadeBase {
  constructor(game) {
    super(game, "Goblin Balloon Brigade", "Fourth Edition", "4ED");
  }
}

module.exports = GoblinBalloonBrigade;
