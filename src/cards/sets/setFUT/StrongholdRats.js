"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StrongholdRats extends UnimplementedCard {
  constructor (game) {
    super(game, "Stronghold Rats", "Future Sight", "FUT");
  }
}

module.exports = StrongholdRats;
