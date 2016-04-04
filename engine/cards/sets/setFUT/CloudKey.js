"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CloudKey extends Card {
  constructor(game) {
    super(game, "Cloud Key", "Future Sight", "FUT");
  }
}

module.exports = CloudKey;
