"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WinterBlast extends Card {
  constructor(game) {
    super(game, "Winter Blast", "Fifth Edition", "5ED");
  }
}

module.exports = WinterBlast;
