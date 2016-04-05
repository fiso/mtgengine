"use strict";
const Constants = require ("../../../Constants");
const GoblinBalloonBrigadeBase = require("../setATH/GoblinBalloonBrigade");

class GoblinBalloonBrigade extends GoblinBalloonBrigadeBase {
  constructor(game) {
    super(game, "Goblin Balloon Brigade", "Revised Edition", "3ED");
  }
}

module.exports = GoblinBalloonBrigade;
