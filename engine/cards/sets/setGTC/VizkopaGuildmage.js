"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VizkopaGuildmageBase = require("../setC13/VizkopaGuildmage.js");

class VizkopaGuildmage extends VizkopaGuildmageBase {
  constructor(game) {
    super(game, "Vizkopa Guildmage", "Gatecrash", "GTC");
  }
}

module.exports = VizkopaGuildmage;
