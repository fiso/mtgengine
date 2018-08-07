"use strict";
const Constants = require ("../../../Constants");
const KayaGhostAssassinBase = require("../setPZ2/KayaGhostAssassin");

class KayaGhostAssassin extends KayaGhostAssassinBase {
  constructor (game) {
    super(game, "Kaya, Ghost Assassin", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = KayaGhostAssassin;
