"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VampireOutcastsBase = require("../setDDK/VampireOutcasts.js");

class VampireOutcasts extends VampireOutcastsBase {
  constructor(game) {
    super(game, "Vampire Outcasts", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = VampireOutcasts;
