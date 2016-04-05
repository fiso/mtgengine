"use strict";
const Constants = require ("../../../Constants");
const VampireOutcastsBase = require("../setDDK/VampireOutcasts");

class VampireOutcasts extends VampireOutcastsBase {
  constructor(game) {
    super(game, "Vampire Outcasts", "Magic 2012", "M12");
  }
}

module.exports = VampireOutcasts;
