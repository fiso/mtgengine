"use strict";
const Constants = require ("../../../Constants");
const RayofCommandBase = require("../setBRB/RayofCommand");

class RayofCommand extends RayofCommandBase {
  constructor (game) {
    super(game, "Ray of Command", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = RayofCommand;
