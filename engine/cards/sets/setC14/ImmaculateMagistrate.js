"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ImmaculateMagistrate extends Card {
  constructor(game) {
    super(game, "Immaculate Magistrate", "Commander 2014", "C14");
  }
}

module.exports = ImmaculateMagistrate;
