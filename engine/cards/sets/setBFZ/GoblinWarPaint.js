"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinWarPaint extends Card {
  constructor(game) {
    super(game, "Goblin War Paint", "Battle for Zendikar", "BFZ");
  }
}

module.exports = GoblinWarPaint;
