"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HazyHomunculus extends Card {
  constructor(game) {
    super(game, "Hazy Homunculus", "Prophecy", "PCY");
  }
}

module.exports = HazyHomunculus;
