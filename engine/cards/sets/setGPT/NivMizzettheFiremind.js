"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NivMizzettheFiremindBase = require("../setpCMP/NivMizzettheFiremind.js");

class NivMizzettheFiremind extends NivMizzettheFiremindBase {
  constructor(game) {
    super(game, "Niv-Mizzet, the Firemind", "Guildpact", "GPT");
  }
}

module.exports = NivMizzettheFiremind;
