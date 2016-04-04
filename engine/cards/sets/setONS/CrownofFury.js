"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CrownofFury extends Card {
  constructor(game) {
    super(game, "Crown of Fury", "Onslaught", "ONS");
  }
}

module.exports = CrownofFury;
