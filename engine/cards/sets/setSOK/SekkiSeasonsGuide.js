"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SekkiSeasonsGuide extends Card {
  constructor(game) {
    super(game, "Sekki, Seasons' Guide", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = SekkiSeasonsGuide;
