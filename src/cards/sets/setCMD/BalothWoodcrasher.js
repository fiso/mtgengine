"use strict";
const Constants = require ("../../../Constants");
const BalothWoodcrasherBase = require("../setC13/BalothWoodcrasher");

class BalothWoodcrasher extends BalothWoodcrasherBase {
  constructor (game) {
    super(game, "Baloth Woodcrasher", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = BalothWoodcrasher;
