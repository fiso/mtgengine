"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChromeSteed extends UnimplementedCard {
  constructor(game) {
    super(game, "Chrome Steed", "Scars of Mirrodin", "SOM");
  }
}

module.exports = ChromeSteed;
