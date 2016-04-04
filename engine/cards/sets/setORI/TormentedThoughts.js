"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TormentedThoughtsBase = require("../setJOU/TormentedThoughts.js");

class TormentedThoughts extends TormentedThoughtsBase {
  constructor(game) {
    super(game, "Tormented Thoughts", "Magic Origins", "ORI");
  }
}

module.exports = TormentedThoughts;
