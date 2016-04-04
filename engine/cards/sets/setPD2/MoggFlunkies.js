"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MoggFlunkiesBase = require("../setATH/MoggFlunkies.js");

class MoggFlunkies extends MoggFlunkiesBase {
  constructor(game) {
    super(game, "Mogg Flunkies", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = MoggFlunkies;
