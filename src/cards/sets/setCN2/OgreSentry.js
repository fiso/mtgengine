"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OgreSentry extends UnimplementedCard {
  constructor (game) {
    super(game, "Ogre Sentry", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = OgreSentry;
