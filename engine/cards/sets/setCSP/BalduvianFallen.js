"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalduvianFallen extends UnimplementedCard {
  constructor(game) {
    super(game, "Balduvian Fallen", "Coldsnap", "CSP");
  }
}

module.exports = BalduvianFallen;
