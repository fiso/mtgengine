"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AvatarofFury extends Card {
  constructor(game) {
    super(game, "Avatar of Fury", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = AvatarofFury;
