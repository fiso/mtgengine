"use strict";
const Constants = require ("../../../Constants");
const TormentedThoughtsBase = require("../setORI/TormentedThoughts");

class TormentedThoughts extends TormentedThoughtsBase {
  constructor (game) {
    super(game, "Tormented Thoughts", "Journey into Nyx", "JOU");
  }
}

module.exports = TormentedThoughts;
