"use strict";
const Constants = require ("../../../Constants");
const Card = require("../../../objects/Card");

class GoblinBully extends Card {
  constructor (game) {
    super(game, "Goblin Bully", "Masters Edition IV", "ME4");
    this.cost = "{1R}";
  }

  resolve (controller) {
    return new Creature(
      this._game,
      controller,
      controller,
      this, 2, 1);
  }
}

module.exports = GoblinBully;
