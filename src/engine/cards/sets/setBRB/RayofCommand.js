"use strict";
const Constants = require ("../../../Constants");
const RayofCommandBase = require("../setDDM/RayofCommand");

class RayofCommand extends RayofCommandBase {
  constructor (game) {
    super(game, "Ray of Command", "Battle Royale Box Set", "BRB");
  }
}

module.exports = RayofCommand;
