"use strict";
const Constants = require ("../../../Constants");
const VizkopaGuildmageBase = require("../setIMA/VizkopaGuildmage");

class VizkopaGuildmage extends VizkopaGuildmageBase {
  constructor (game) {
    super(game, "Vizkopa Guildmage", "Gatecrash", "GTC");
  }
}

module.exports = VizkopaGuildmage;
