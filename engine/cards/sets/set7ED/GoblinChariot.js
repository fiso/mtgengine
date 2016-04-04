"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinChariotBase = require("../set8ED/GoblinChariot.js");

class GoblinChariot extends GoblinChariotBase {
  constructor(game) {
    super(game, "Goblin Chariot", "Seventh Edition", "7ED");
  }
}

module.exports = GoblinChariot;
