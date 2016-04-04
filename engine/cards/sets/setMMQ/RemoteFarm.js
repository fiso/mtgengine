"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RemoteFarm extends Card {
  constructor(game) {
    super(game, "Remote Farm", "Mercadian Masques", "MMQ");
  }
}

module.exports = RemoteFarm;
