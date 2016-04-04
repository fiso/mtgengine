"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SnapcasterMage extends Card {
  constructor(game) {
    super(game, "Snapcaster Mage", "Innistrad", "ISD");
  }
}

module.exports = SnapcasterMage;
