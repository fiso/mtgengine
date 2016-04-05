"use strict";
const Constants = require ("../../../Constants");
const TormentedThoughtsBase = require("../setJOU/TormentedThoughts");

class TormentedThoughts extends TormentedThoughtsBase {
  constructor(game) {
    super(game, "Tormented Thoughts", "Magic Origins", "ORI");
  }
}

module.exports = TormentedThoughts;
