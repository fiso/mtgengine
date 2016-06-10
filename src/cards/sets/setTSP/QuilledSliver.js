"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuilledSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Quilled Sliver", "Time Spiral", "TSP");
  }
}

module.exports = QuilledSliver;
