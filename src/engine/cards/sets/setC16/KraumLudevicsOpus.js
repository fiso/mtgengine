"use strict";
const Constants = require ("../../../Constants");
const KraumLudevicsOpusBase = require("../setPZ2/KraumLudevicsOpus");

class KraumLudevicsOpus extends KraumLudevicsOpusBase {
  constructor (game) {
    super(game, "Kraum, Ludevic's Opus", "Commander 2016", "C16");
  }
}

module.exports = KraumLudevicsOpus;
