"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AysenCrusaderBase = require("../setHML/AysenCrusader.js");

class AysenCrusader extends AysenCrusaderBase {
  constructor(game) {
    super(game, "Aysen Crusader", "Masters Edition II", "ME2");
  }
}

module.exports = AysenCrusader;
