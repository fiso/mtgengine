"use strict";
const Constants = require ("../../../Constants");
const OgreSentryBase = require("../setCN2/OgreSentry");

class OgreSentry extends OgreSentryBase {
  constructor (game) {
    super(game, "Ogre Sentry", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = OgreSentry;
