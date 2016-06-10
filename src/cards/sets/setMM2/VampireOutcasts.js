"use strict";
const Constants = require ("../../../Constants");
const VampireOutcastsBase = require("../setDDK/VampireOutcasts");

class VampireOutcasts extends VampireOutcastsBase {
  constructor (game) {
    super(game, "Vampire Outcasts", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = VampireOutcasts;
