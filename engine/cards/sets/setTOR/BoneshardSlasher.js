"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BoneshardSlasher extends Card {
  constructor(game) {
    super(game, "Boneshard Slasher", "Torment", "TOR");
  }
}

module.exports = BoneshardSlasher;
