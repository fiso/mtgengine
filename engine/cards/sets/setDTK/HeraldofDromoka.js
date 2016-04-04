"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeraldofDromoka extends Card {
  constructor(game) {
    super(game, "Herald of Dromoka", "Dragons of Tarkir", "DTK");
  }
}

module.exports = HeraldofDromoka;
