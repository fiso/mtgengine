"use strict";
const Constants = require ("../../../Constants");
const RayofCommandBase = require("../setDDM/RayofCommand");

class RayofCommand extends RayofCommandBase {
  constructor (game) {
    super(game, "Ray of Command", "Ice Age", "ICE");
  }
}

module.exports = RayofCommand;
