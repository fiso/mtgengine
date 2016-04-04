"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HeraldofTorment extends Card {
  constructor(game) {
    super(game, "Herald of Torment", "Born of the Gods", "BNG");
  }
}

module.exports = HeraldofTorment;
