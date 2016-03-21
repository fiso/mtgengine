"use strict";
const Card = require("../objects/Card");
const Constants = require ("../Constants");
const Creature = require("../objects/Creature");
const assert = require("assert");

class GoblinBully extends Card {
  constructor(game) {
    super(game, "Goblin Bully",
      [],
      [Constants.cardTypes.CREATURE],
      ["Goblin"],
      "https://image.deckbrew.com/mtg/multiverseid/4342.jpg");
  }

  resolve (controller) {
    this._game.log("Goblin Bully resolves");

    return new Creature(
      this._game,
      controller,
      controller,
      this, 2, 1);
  }

  get cost () {
    let cost = {
      mana: {}
    };
    cost["mana"][Constants.costs.RED] = 1;
    cost["mana"][Constants.costs.GENERIC] = 1;
    return cost;
  }
}

module.exports = GoblinBully;
