"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinBalloonBrigadeBase = require("../setATH/GoblinBalloonBrigade.js");

class GoblinBalloonBrigade extends GoblinBalloonBrigadeBase {
  constructor(game) {
    super(game, "Goblin Balloon Brigade", "Unlimited Edition", "2ED");
  }
}

module.exports = GoblinBalloonBrigade;
