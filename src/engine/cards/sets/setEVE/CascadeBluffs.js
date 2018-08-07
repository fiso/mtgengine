"use strict";
const Constants = require ("../../../Constants");
const CascadeBluffsBase = require("../setA25/CascadeBluffs");

class CascadeBluffs extends CascadeBluffsBase {
  constructor (game) {
    super(game, "Cascade Bluffs", "Eventide", "EVE");
  }
}

module.exports = CascadeBluffs;
