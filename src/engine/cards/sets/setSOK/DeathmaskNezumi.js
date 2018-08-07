"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathmaskNezumi extends UnimplementedCard {
  constructor (game) {
    super(game, "Deathmask Nezumi", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = DeathmaskNezumi;
