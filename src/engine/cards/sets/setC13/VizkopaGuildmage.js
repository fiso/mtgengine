"use strict";
const Constants = require ("../../../Constants");
const VizkopaGuildmageBase = require("../setIMA/VizkopaGuildmage");

class VizkopaGuildmage extends VizkopaGuildmageBase {
  constructor (game) {
    super(game, "Vizkopa Guildmage", "Commander 2013", "C13");
  }
}

module.exports = VizkopaGuildmage;
