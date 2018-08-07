"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GangrenousGoliath extends UnimplementedCard {
  constructor (game) {
    super(game, "Gangrenous Goliath", "Onslaught", "ONS");
  }
}

module.exports = GangrenousGoliath;
