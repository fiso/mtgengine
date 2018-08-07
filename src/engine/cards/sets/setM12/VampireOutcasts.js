"use strict";
const Constants = require ("../../../Constants");
const VampireOutcastsBase = require("../setMM2/VampireOutcasts");

class VampireOutcasts extends VampireOutcastsBase {
  constructor (game) {
    super(game, "Vampire Outcasts", "Magic 2012", "M12");
  }
}

module.exports = VampireOutcasts;
