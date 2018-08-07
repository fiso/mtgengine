"use strict";
const Constants = require ("../../../Constants");
const VirulentSliverBase = require("../setH09/VirulentSliver");

class VirulentSliver extends VirulentSliverBase {
  constructor (game) {
    super(game, "Virulent Sliver", "Future Sight", "FUT");
  }
}

module.exports = VirulentSliver;
