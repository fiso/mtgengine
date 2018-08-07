"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IntotheNorth extends UnimplementedCard {
  constructor (game) {
    super(game, "Into the North", "Coldsnap", "CSP");
  }
}

module.exports = IntotheNorth;
