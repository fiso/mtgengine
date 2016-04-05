"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Icefall extends UnimplementedCard {
  constructor(game) {
    super(game, "Icefall", "Coldsnap", "CSP");
  }
}

module.exports = Icefall;
