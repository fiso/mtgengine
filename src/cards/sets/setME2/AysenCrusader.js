"use strict";
const Constants = require ("../../../Constants");
const AysenCrusaderBase = require("../setHML/AysenCrusader");

class AysenCrusader extends AysenCrusaderBase {
  constructor(game) {
    super(game, "Aysen Crusader", "Masters Edition II", "ME2");
  }
}

module.exports = AysenCrusader;
