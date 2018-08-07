"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DormantGomazoa extends UnimplementedCard {
  constructor (game) {
    super(game, "Dormant Gomazoa", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = DormantGomazoa;
