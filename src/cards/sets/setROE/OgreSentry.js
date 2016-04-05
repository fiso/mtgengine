"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OgreSentry extends UnimplementedCard {
  constructor(game) {
    super(game, "Ogre Sentry", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = OgreSentry;
