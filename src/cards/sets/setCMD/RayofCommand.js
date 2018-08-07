"use strict";
const Constants = require ("../../../Constants");
const RayofCommandBase = require("../setDDM/RayofCommand");

class RayofCommand extends RayofCommandBase {
  constructor (game) {
    super(game, "Ray of Command", "Commander 2011", "CMD");
  }
}

module.exports = RayofCommand;
