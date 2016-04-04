"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BorosGuildmageBase = require("../setCMD/BorosGuildmage.js");

class BorosGuildmage extends BorosGuildmageBase {
  constructor(game) {
    super(game, "Boros Guildmage", "Planechase", "HOP");
  }
}

module.exports = BorosGuildmage;
