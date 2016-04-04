"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeraldofthePantheon extends Card {
  constructor(game) {
    super(game, "Herald of the Pantheon", "Magic Origins", "ORI");
  }
}

module.exports = HeraldofthePantheon;
