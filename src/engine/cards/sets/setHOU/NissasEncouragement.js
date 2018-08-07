"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NissasEncouragement extends UnimplementedCard {
  constructor (game) {
    super(game, "Nissa's Encouragement", "Hour of Devastation", "HOU");
  }
}

module.exports = NissasEncouragement;
