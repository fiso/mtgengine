"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DrainingWhelk extends UnimplementedCard {
  constructor(game) {
    super(game, "Draining Whelk", "Time Spiral", "TSP");
  }
}

module.exports = DrainingWhelk;
