"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThingfromtheDeep extends Card {
  constructor(game) {
    super(game, "Thing from the Deep", "Masters Edition IV", "ME4");
  }
}

module.exports = ThingfromtheDeep;
