"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WindZendikon extends UnimplementedCard {
  constructor (game) {
    super(game, "Wind Zendikon", "Worldwake", "WWK");
  }
}

module.exports = WindZendikon;
