"use strict";
const Constants = require ("../../../Constants");
const RayofCommandBase = require("../setBRB/RayofCommand");

class RayofCommand extends RayofCommandBase {
  constructor(game) {
    super(game, "Ray of Command", "Ice Age", "ICE");
  }
}

module.exports = RayofCommand;
