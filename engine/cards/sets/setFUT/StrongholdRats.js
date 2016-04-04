"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StrongholdRats extends Card {
  constructor(game) {
    super(game, "Stronghold Rats", "Future Sight", "FUT");
  }
}

module.exports = StrongholdRats;
