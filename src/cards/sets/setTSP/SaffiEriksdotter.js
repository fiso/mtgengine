"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SaffiEriksdotter extends UnimplementedCard {
  constructor (game) {
    super(game, "Saffi Eriksdotter", "Time Spiral", "TSP");
  }
}

module.exports = SaffiEriksdotter;
