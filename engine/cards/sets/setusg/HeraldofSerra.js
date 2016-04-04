"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeraldofSerra extends Card {
  constructor(game) {
    super(game, "Herald of Serra", "Urza's Saga", "USG");
  }
}

module.exports = HeraldofSerra;
