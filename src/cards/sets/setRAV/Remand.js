"use strict";
const Constants = require ("../../../Constants");
const RemandBase = require("../setDDM/Remand");

class Remand extends RemandBase {
  constructor (game) {
    super(game, "Remand", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Remand;
