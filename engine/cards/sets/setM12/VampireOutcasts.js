"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VampireOutcastsBase = require("../setDDK/VampireOutcasts.js");

class VampireOutcasts extends VampireOutcastsBase {
  constructor(game) {
    super(game, "Vampire Outcasts", "Magic 2012", "M12");
  }
}

module.exports = VampireOutcasts;
